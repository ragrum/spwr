import React from 'react';
import { Dialog } from '@reach/dialog';
import VisuallyHidden from '@reach/visually-hidden';

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
      className="w-[75vw] md:w-[25vw] my-24 p-4 rounded bg-gray-500 text-white"
    >
      <div className="flex justify-between font-bold text-2xl mb-4 pb-2 border-b-2 border-b-white">
        <span className="self-center text-xl">Let the sunshine</span>
        <button className="self-center cursor-default text-2xl" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
      </div>

      <p>
        SPWR Corporation is a public company headquartered in San Jose,
        California. It sells, installs, and finances solar power products, such
        as panels, batteries, mounting hardware, and monitoring software.
      </p>
    </Dialog>
  );
}

export default Modal;
