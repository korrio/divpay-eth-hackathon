import React from 'react';

export interface ILayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: ILayoutProps) {
  return <div className='xl:pl-72 2xl:pl-80'>{children}</div>;
}
