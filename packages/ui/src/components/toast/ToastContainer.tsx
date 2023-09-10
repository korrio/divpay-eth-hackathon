import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { ToastContainer as ToastifyContainer } from 'react-toastify';

export interface IToastContainerProps {
  className?: string;
}

export const ToastContainer: React.FC<IToastContainerProps> = ({ className }: IToastContainerProps) => {
  return (
    <ToastifyContainer
      newestOnTop
      bodyClassName={() =>
        'flex flex-col bg-dark-700 ring-1 ring-black/20 bg-slate-800 shadow-md mt-2 rounded-xl overflow-hidden'
      }
      toastClassName={() => ''}
      className={className}
    />
  );
};
