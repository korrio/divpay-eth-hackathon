import React from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { Disclosure } from '@headlessui/react';
import { useAccount } from 'wagmi';
import { HiOutlineChevronDown, HiOutlineHome } from 'react-icons/hi';
import { AccountCard } from 'ui';

interface ISidebarProps {}

export const Sidebar: React.FC<ISidebarProps> = ({}) => {
  const { address, isConnected } = useAccount();

  return (
    <>
      <aside className='dark:bg-dark top-0 left-0 z-40 hidden h-full max-w-full border-r border-dashed border-gray-200 dark:border-gray-700 sm:w-80 xl:fixed xl:block xl:w-72 2xl:w-80'>
        <div className='relative flex h-24 items-center justify-center overflow-hidden px-6 py-4 2xl:px-8'>
          Logo placement
        </div>
        <OverlayScrollbarsComponent>
          <div className='px-6 pb-5 2xl:px-8'>
            {isConnected && <AccountCard address={address} />}
            <div className='mt-12'>
              <Disclosure as='div' className={'mb-2 min-h-[48px] list-none last:mb-0'}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      as='div'
                      className='relative flex h-12 w-full cursor-pointer items-center justify-between whitespace-nowrap rounded-lg px-4 text-sm text-white transition-all'
                    >
                      <span className='z-[1] mr-3 flex items-center'>
                        <span className='mr-3'>
                          <HiOutlineHome size={24} />
                        </span>
                        Home
                      </span>

                      <span className={`z-[1] transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>
                        <HiOutlineChevronDown />
                      </span>
                      <span className='shadow-large absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-gray-800'></span>
                    </Disclosure.Button>
                    <Disclosure.Panel
                      as='div'
                      className='ease-[cubic-bezier(0.33, 1, 0.68, 1)] overflow-hidden transition-all duration-[350ms]'
                    >
                      <ul>
                        <li className='first:pt-2'>
                          <a className='hover:text-brand flex items-center rounded-lg p-3 pl-6 text-sm !font-medium text-blue-800 transition-all before:mr-5 before:-ml-0.5 before:h-2 before:w-2 before:rounded-full before:bg-gray-900 dark:!text-white dark:before:!bg-white dark:hover:text-white'>
                            Test
                          </a>
                        </li>
                        <li className='first:pt-2'>
                          <a className='hover:text-brand !text-brand flex items-center rounded-lg p-3 pl-6 text-sm !font-medium text-gray-500 transition-all before:mr-5 before:-ml-0.5 before:h-1 before:w-1 before:rounded-full before:bg-gray-500 dark:!text-white dark:before:!bg-white dark:hover:text-white'>
                            Test
                          </a>
                        </li>
                        <li className='first:pt-2'>
                          <a className='hover:text-brand !text-brand flex items-center rounded-lg p-3 pl-6 text-sm !font-medium text-gray-500 transition-all before:mr-5 before:-ml-0.5 before:h-1 before:w-1 before:rounded-full before:bg-gray-500 dark:!text-white dark:before:!bg-white dark:hover:text-white'>
                            Test
                          </a>
                        </li>
                        <li className='first:pt-2'>
                          <a className='hover:text-brand !text-brand flex items-center rounded-lg p-3 pl-6 text-sm !font-medium text-gray-500 transition-all before:mr-5 before:-ml-0.5 before:h-1 before:w-1 before:rounded-full before:bg-gray-500 dark:!text-white dark:before:!bg-white dark:hover:text-white'>
                            Test
                          </a>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
              <div className='mb-2 min-h-[48px] list-none last:mb-0'>
                <a
                  className='relative flex h-12 items-center whitespace-nowrap rounded-lg px-4 text-sm text-gray-500 transition-all hover:text-gray-200 dark:hover:text-white'
                  href='/about'
                >
                  <span className='relative z-[1] mr-3'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z'
                      />
                    </svg>
                  </span>
                  <span className='relative z-[1]'>Campaigns</span>
                  <span className='shadow-large absolute bottom-0 left-0 right-0 h-full w-full rounded-lg bg-gray-800'></span>
                </a>
              </div>
            </div>
          </div>
        </OverlayScrollbarsComponent>
      </aside>
    </>
  );
};
