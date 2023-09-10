import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Layout, Navbar } from 'ui';
import { Sidebar } from './sidebar';

interface IWrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<IWrapperProps> = ({ children }) => {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setEnabled((prev) => !prev);
  };

  useEffect(() => {
    switch (theme) {
      case 'light':
        setEnabled(false);
        break;
      case 'dark':
        setEnabled(true);
        break;
      default:
        break;
    }
  }, []);

  useEffect(() => {
    enabled ? setTheme('dark') : setTheme('light');
  }, [enabled]);

  return (
    <>
      <Layout>
        <Navbar themeSwitch={changeTheme} isDarkMode={enabled} />
        <Sidebar />
        <main className='3xl:px-12 min-h-[100vh] px-4 pt-24 pb-16 sm:px-6 sm:pb-20 lg:px-8 xl:px-10 xl:pb-20'>
          {children}
        </main>
      </Layout>
    </>
  );
};

export default Wrapper;
