import React from 'react';
import { Dialog } from '@reach/dialog';

import '@reach/dialog/styles.css';

function Modal() {
  return (
    <Dialog isOpen={true} aria-label="Learn more about SPWR">
      <p>Some Content</p>
    </Dialog>
  );
}

export default Modal;
