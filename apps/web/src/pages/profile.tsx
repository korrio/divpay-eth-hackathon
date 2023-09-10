import { Lock__factory } from '@/typechain';
import React, { useEffect, useRef, useState } from 'react';
import { Checkbox, Input } from 'ui';
import { useProvider } from 'wagmi';
import { fromUnixTime, format } from 'date-fns';
import { GetServerSideProps, NextPage } from 'next';
import { dehydrate, DehydratedState, QueryClient, useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';

const Profile: NextPage = () => {
  const provider = useProvider();
  const [checked, setChecked] = useState(false);
  const [unlockTime, setUnlockTime] = useState<Date | undefined | null>();
  const emailRef = useRef<HTMLInputElement | null>(null);
  const { data, isLoading }: UseQueryResult<Post[]> = useQuery<Post[]>(['posts', 10], () => fetchPosts(10));

  useEffect(() => {
    const fetchUnlockTime = async () => {
      const contract = Lock__factory.connect(process.env.NEXT_PUBLIC_LOCK_CONTRACT_ADDRESS ?? '', provider);
      const lockedAmountUnlockTime = await contract.unlockTime();
      setUnlockTime(fromUnixTime(lockedAmountUnlockTime.toNumber()));
      emailRef.current?.focus();
    };

    fetchUnlockTime();
  }, []);

  const checkboxChanged = (value: boolean) => {
    setChecked(value);
  };

  const renderPosts = () => {
    if (!data) return <h1>No data!</h1>;
    if (isLoading) return <h1>Loading....</h1>;
    else
      return (
        <>
          {data.map((value) => {
            return (
              <>
                <p>{value.id}</p>
                <h1>{value.title}</h1>
                <h2>{value.body}</h2>
              </>
            );
          })}
        </>
      );
  };

  return (
    <div>
      {/* <Checkbox checked={checked} set={checkboxChanged} />
      <Input key='email' label='Somerandom Input' required ref={emailRef} /> */}
      {unlockTime && <p>Your locked amount will be unlocked on: {format(unlockTime, 'dd.MM.yyyy HH:mm')}</p>}
      {renderPosts()}
    </div>
  );
};

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const fetchPosts = async (limit = 10) => {
  const parsed = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  const result = parsed.data.filter((x) => x.id <= limit);
  return result;
};

export const getServerSideProps: GetServerSideProps = async (): Promise<{
  props: { dehydratedState: DehydratedState };
}> => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts', 10], () => fetchPosts(10));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

Profile.displayName = 'Profile';

export default Profile;
