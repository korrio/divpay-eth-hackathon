import { NextPage } from 'next';
import React from 'react';
import { useIsMounted } from 'lib';
import { useTheme } from 'next-themes';
import { NextSeo } from 'next-seo';
import Button from 'ui';
import Image from '@/components/image';
import ErrorLightImage from '@/assets/images/404-light.svg';
import ErrorDarkImage from '@/assets/images/404-dark.svg';
import AnchorLink from '@/components/links/anchor-link';

const ErrorPage: NextPage = () => {
  const isMounted = useIsMounted();
  const { theme } = useTheme();

  const isDarkMode = theme === 'dark';

  return (
    <>
      <NextSeo title='404 Error! No Result Found' description='React Next Web3 NFT Crypto Dashboard Template' />

      <div className='flex max-w-full flex-col items-center justify-center text-center'>
        <div className='3xl:w-[500px] relative w-52 max-w-full sm:w-[400px] xl:w-[450px]'>
          {isMounted && !isDarkMode && <Image src={ErrorLightImage} alt='404 Error' />}
          {isMounted && isDarkMode && <Image src={ErrorDarkImage} alt='404 Error' />}
        </div>

        <h2 className='3xl:mt-12 3xl:text-2xl mt-5 mb-2 text-base font-medium uppercase tracking-wide text-gray-900 dark:text-white sm:mt-10 sm:mb-4 sm:text-xl'>
          Error! No Result Found
        </h2>
        <p className='mb-4 max-w-full text-xs leading-loose tracking-tight text-gray-600 dark:text-gray-400 sm:mb-6 sm:w-[430px] sm:text-sm sm:leading-loose'>
          Sorry, the page you are looking for might be renamed, removed, or might never exist.
        </p>
        <AnchorLink href='/'>
          <Button shape='rounded'>Back to Home</Button>
        </AnchorLink>
      </div>
    </>
  );
};

ErrorPage.displayName = '404 Not Found';

export default ErrorPage;
