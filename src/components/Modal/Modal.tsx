import React from 'react';
import { Dialog } from '@reach/dialog';

import '@reach/dialog/styles.css';

interface Props {
  isOpen: boolean;
  onDismiss: () => void;
}

function Modal({ isOpen, onDismiss }: Props) {
  return (
    <Dialog
      isOpen={isOpen}
      onDismiss={onDismiss}
      aria-label="Learn more about SPWR"
    >
      <p>Some Content</p>
    </Dialog>
  );
}

export default Modal;
