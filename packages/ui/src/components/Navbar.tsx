import React, { FC } from 'react';
import { WalletConnectModal } from './WalletConnectModal';
import { HiOutlineMenu, HiOutlineMoon, HiOutlineSun } from 'react-icons/hi';
import Button from './button';
import { Switch } from './switch';
export interface INavbarProps {
  themeSwitch: () => void;
  isDarkMode: boolean;
}

const HeaderRightArea: FC<INavbarProps> = ({ isDarkMode, themeSwitch }) => {
  return (
    <div className='relative order-last flex shrink-0 items-center gap-3 sm:gap-6 lg:gap-8'>
      <Switch
        checked={isDarkMode}
        onChange={themeSwitch}
        size='sm'
        checkedIcon={<HiOutlineMoon className='text-indigo-900' />}
        uncheckedIcon={<HiOutlineSun className='text-teal-900' />}
      />
      <WalletConnectModal />
    </div>
  );
};

export const Navbar: FC<INavbarProps> = ({ themeSwitch, isDarkMode }) => {
  return (
    <nav className='fixed top-0 right-0 z-30 h-16 w-full transition-all duration-300 sm:h-24 xl:pl-72 2xl:pl-80'>
      <div className='flex h-full items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10'>
        <div className='flex items-center'>
          <div className='mr-1 block sm:mr-3 xl:hidden'>
            <Button className='h-8 w-8 !rounded-full'>
              <HiOutlineMenu className='h-auto w-6 text-indigo-600 md:w-auto' />
            </Button>
          </div>
          <div className='flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6 cursor-pointer dark:text-white'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>
          </div>
        </div>
        <HeaderRightArea isDarkMode={isDarkMode} themeSwitch={themeSwitch} />
      </div>
    </nav>
  );
};
