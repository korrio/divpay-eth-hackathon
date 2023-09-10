import { Fragment, useState } from 'react';
import { utils } from 'ethers';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { useAccount, useBalance, useConnect, useDisconnect } from 'wagmi';
import { useIsMounted } from 'lib';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import Button from './button';

export interface IWalletConnectModalProps {}

export function WalletConnectModal({}: IWalletConnectModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [roundedBalance, setRoundedBalance] = useState('');

  const isMounted = useIsMounted();

  const { connect, isLoading, connectors } = useConnect();

  const { disconnect } = useDisconnect();

  const { address, isConnected } = useAccount();

  const { data: balance } = useBalance({
    addressOrName: address,
    onSuccess: (data) => {
      let test = utils.formatEther(data.value);
      test = (+test).toFixed(4);
      setRoundedBalance(test);
    },
  });

  const handleModal = () => {
    setIsOpen((state) => !state);
  };

  const handleConnect = () => {
    if (isConnected) {
      disconnect();
    } else {
      handleModal();
    }
  };

  return (
    <>
      {address ? (
        <div className='flex items-center gap-3 sm:gap-6 lg:gap-8'>
          <div className='relative'>
            <Menu>
              <Menu.Button className='border-3 shadow-main hover:shadow-large block h-10 w-10 overflow-hidden rounded-full border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all hover:-translate-y-0.5 dark:border-gray-700 sm:h-12 sm:w-12'></Menu.Button>
              <Transition
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4'
                enterTo='opacity-100 translate-y-0'
                leave='ease-in duration-300'
                leaveFrom='opacity-100 translate-y-0'
                leaveTo='opacity-0 translate-y-4'
              >
                <Menu.Items className='shadow-large absolute -right-20 mt-3 w-72 origin-top-right rounded-lg bg-white dark:bg-gray-900 sm:-right-14'>
                  <Menu.Item>
                    <div className='border-b border-dashed border-gray-200 p-3 dark:border-gray-700'>
                      <a
                        href='/profile'
                        className='flex items-center gap-3 rounded-lg py-2.5 px-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800'
                      >
                        <span className='h-8 w-8 rounded-full border-2 border-solid border-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:border-gray-700'></span>
                        <span className='grow uppercase'>View Your Profile</span>
                        <HiOutlineArrowCircleRight className='h-6 w-6' />
                      </a>
                    </div>
                  </Menu.Item>
                  <Menu.Item>
                    <Menu.Item>
                      <div className='border-b border-dashed border-gray-200 px-6 py-5 dark:border-gray-700'>
                        <div className='flex items-center justify-between gap-3'>
                          <span className='text-sm font-medium -tracking-tighter text-gray-600 dark:text-gray-400'>
                            Balance
                          </span>
                          <span className='rounded-lg bg-gray-100 px-2 py-1 text-sm tracking-tighter dark:bg-gray-800'>
                            {address.slice(0, 6)}
                            {'...'}
                            {address.slice(address.length - 6)}
                          </span>
                        </div>
                        <div className='mt-3 font-medium uppercase tracking-wider text-gray-900 dark:text-white'>
                          {roundedBalance} {balance?.symbol}
                        </div>
                      </div>
                    </Menu.Item>
                  </Menu.Item>
                  <Menu.Item>
                    <div className='p-3'>
                      <div
                        className='flex cursor-pointer items-center gap-3 rounded-lg py-2.5 px-3 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800'
                        onClick={handleConnect}
                      >
                        {/* <PowerIcon /> */}
                        <span className='grow uppercase'>Disconnect</span>
                      </div>
                    </div>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <a href='/create-nft'>
            <Button className='shadow-main hover:shadow-large'>CREATE</Button>
          </a>
        </div>
      ) : (
        <>
          <Transition show={isOpen} as={Fragment}>
            <Dialog as='div' className='fixed inset-0 z-10 overflow-y-auto' onClose={setIsOpen}>
              <div className='min-h-screen px-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Dialog.Overlay className='fixed inset-0' />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span className='inline-block h-screen align-middle' aria-hidden='true'>
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <div className='my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <div className='flex items-center justify-between'>
                      <Dialog.Title as='h3' className='text-2xl font-extrabold text-gray-900'>
                        Connect Wallet
                      </Dialog.Title>
                      <button
                        type='button'
                        onClick={() => setIsOpen(false)}
                        className='text-gray-400 hover:text-gray-500'
                      >
                        <span className='sr-only'>Close</span>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          className='h-6 w-6'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden
                        >
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12' />
                        </svg>
                      </button>
                    </div>
                    <div className='mt-8 flex flex-col space-y-2'>
                      {connectors.map((connector) => (
                        <Button
                          type='button'
                          disabled={isMounted && !connector.ready}
                          key={connector.name}
                          onClick={() => {
                            setIsOpen(false);
                            connect({ connector });
                          }}
                        >
                          {connector.id === 'injected' ? (isMounted ? connector.name : connector.id) : connector.name}
                          {isMounted && !connector.ready && ' (unsupported)'}
                          {isLoading && connector.name === connector?.name && '…'}
                        </Button>
                      ))}
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
          <Button onClick={handleConnect} className='shadow-main hover:shadow-large'>
            CONNECT
          </Button>
        </>
      )}
    </>
  );
}
