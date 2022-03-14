import React, { useState } from 'react';

import { Modal } from './components';

import sun from './sun.svg';

function App() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  return (
    <div className="text-center">
      <header className="App-header bg-gray-700 text-white min-h-screen flex flex-col items-center justify-center">
        <img
          src={sun}
          className="h-[25vmin] pointer-events-none motion-safe:animate-[spin_20s_linear_infinite]"
          alt="sun"
        />

        <button
          className="mt-12 p-2.5 rounded border border-amber-500 cursor-default bg-amber-600 text-white shadow-md shadow-amber-500/30"
          onClick={open}
        >
          Learn more about SPWR
        </button>

        <Modal isOpen={!showModal} close={close} />
      </header>
    </div>
  );
}

export default App;
