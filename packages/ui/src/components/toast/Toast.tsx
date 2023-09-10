import { toast, ToastOptions } from 'react-toastify';
import ToastCompleted from './ToastCompleted';

export const TOAST_OPTIONS: ToastOptions = {
  position: 'top-right',
  autoClose: false,
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
  closeButton: false,
  icon: false,
};

export interface NotificationData {
  type: 'swap' | 'approval';
  txHash: string;
  promise: Promise<any>;
}

export const createToast = (props: NotificationData) => {
  const onDismiss = () => toast.dismiss(props.txHash);

  props.promise.then(() => {
    setTimeout(onDismiss, 3000);

    const toastId = `completed:${props.txHash}`;
    toast(<ToastCompleted {...props} onDismiss={() => toast.dismiss(toastId)} />, {
      ...TOAST_OPTIONS,
      toastId,
      autoClose: 5000,
    });
  });
};
