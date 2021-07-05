import React from 'react';
import { toast, ToastOptions } from 'react-toastify';
// import { Alert } from 'reactstrap';

export type MessageType = 'info' | 'success' | 'warning' | 'error' | 'default';
// const ALERT_COLOR_MAP = {
//   default: 'primary',
//   success: 'success',
//   error: 'danger',
//   info: 'info',
//   warning: 'warning',
// };

const TOAST_OPTIONS: ToastOptions = {
  autoClose: 5000,
  position: 'bottom-center',
  hideProgressBar: true,
};

const TOAST_CONTENT_STYLE: React.CSSProperties = { textAlign: 'center' };

export const showToastMessage = (
  messageContent: string,
  messageType: MessageType = 'default'
) => {
  const toastContent = () => {
    // return <Alert color={ALERT_COLOR_MAP[messageType]}>{messageContent}</Alert>;
    return <div style={TOAST_CONTENT_STYLE}>{messageContent}</div>;
  };

  switch (messageType) {
    case 'success':
      toast.success(toastContent(), TOAST_OPTIONS);
      break;
    case 'error':
      toast.error(toastContent(), TOAST_OPTIONS);
      break;
    case 'info':
      toast.info(toastContent(), TOAST_OPTIONS);
      break;
    case 'warning':
      toast.warn(toastContent(), TOAST_OPTIONS);
      break;
    default:
      toast(toastContent(), TOAST_OPTIONS);
  }
};

export const removeAllToasts = () => {
  // Remove all toasts !
  return toast.dismiss();
};
