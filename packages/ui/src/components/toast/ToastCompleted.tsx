import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { FC, ReactNode } from 'react';

import { NotificationData } from './index';

interface ToastContent {
  icon: ReactNode;
  title: string;
  summary: ReactNode | Array<ReactNode>;
}

export const ToastContent: FC<ToastContent> = ({ icon, title, summary }) => {
  return (
    <div className='flex items-start gap-4 p-4'>
      <div className='mt-0.5'>{icon}</div>
      <div className='flex flex-col gap-1'>
        <p className='text-slate-50'>{title}</p>
        <p className='text-slate-400'>{summary}</p>
      </div>
    </div>
  );
};

interface ToastButtons {
  href: string;
  onDismiss(): void;
}

export const ToastButtons: FC<ToastButtons> = ({ href, onDismiss }) => {
  return (
    <div className='grid grid-cols-2 divide-x divide-slate-200/5'>
      <a
        href={href}
        target='_blank'
        className='text-blue cursor-pointer border-t border-slate-200/5 py-3 text-center hover:bg-slate-700/20'
      >
        View Detail
      </a>
      <span
        onClick={onDismiss}
        className='text-blue cursor-pointer border-t border-slate-200/5 py-3 text-center hover:bg-slate-700/20'
      >
        Dismiss
      </span>
    </div>
  );
};

interface ToastCompleted extends NotificationData {
  onDismiss: () => void;
}

const ToastCompleted: FC<ToastCompleted> = ({ txHash, onDismiss }: ToastCompleted) => {
  return (
    <>
      <ToastContent
        icon={<CheckCircleIcon width={18} height={18} className='text-green' />}
        title='Transaction Completed'
        summary='Test'
      />
      <ToastButtons href={'/'} onDismiss={onDismiss} />
    </>
  );
};

export default ToastCompleted;
