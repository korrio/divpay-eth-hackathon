import React from 'react';
import Blockies from 'react-blockies';

export interface IAccountCardProps {
  address?: string;
}

export const AccountCard: React.FC<IAccountCardProps> = ({ address }) => {
  return (
    <div className='dark:bg-light-dark flex items-center rounded-lg bg-gray-100 p-5'>
      {address && (
        <>
          <Blockies seed={address} className='relative h-10 w-10 shrink-0 overflow-hidden rounded-full' size={10} />
          <div className='pl-3'>
            <h3 className='traking-wide text-sm font-medium uppercase text-gray-900 dark:text-white'>Address:</h3>
            <span className='mt-1 block text-xs text-gray-600 dark:text-gray-400'>
              {address && `${address?.slice(0, 6)}...${address?.slice(address?.length - 4, address?.length)}`}
            </span>
          </div>
        </>
      )}
    </div>
  );
};
