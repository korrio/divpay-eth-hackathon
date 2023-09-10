import React from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import '../styles/globals.css';
import 'ui/styles.css';
import 'overlayscrollbars/css/overlayscrollbars.min.css';

import { ToastContainer, WagmiProvider } from 'ui';
import Wrapper from '@/components/wrapper';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 20 * 1000,
          },
        },
      })
  );
  const [pageLoaded, setPageLoaded] = useState(false);
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return (
    <>
      <Head>
        <title>{Component.displayName}</title>
        {/* maximum-scale 1 meta tag need to prevent ios input focus auto zooming */}
        <meta name='viewport' content='width=device-width, initial-scale=1 maximum-scale=1' />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider attribute='class' enableSystem={false} defaultTheme='light'>
            <WagmiProvider>
              {pageLoaded && (
                <Wrapper>
                  {<Component {...pageProps} />}
                  <ToastContainer className='mt-[50px]' />
                </Wrapper>
              )}
            </WagmiProvider>
          </ThemeProvider>
          <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
