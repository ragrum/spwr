import React from 'react';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

import '@reach/dialog/styles.css';

interface Props {
  isOpen: boolean;
  close: () => void;
}

function Modal({ isOpen, close }: Props) {
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={close}
      aria-label="Learn more about SPWR"
    >
      <button className="cursor-default" onClick={close}>
        <VisuallyHidden>Close</VisuallyHidden>
        <span aria-hidden>×</span>
      </button>
      <p>Hello there. I am a dialog</p>
    </Dialog>
  );
}

export default Modal;
