import React from 'react';

import { Modal } from './components';

import sun from './sun.svg';

function App() {
  return (
    <div className="text-center">
      <header className="App-header bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
        <img
          src={sun}
          className="h-[25vmin] pointer-events-none motion-safe:animate-[spin_20s_linear_infinite]"
          alt="sun"
        />

        <p>
          Edit <code className="font-mono">src/App.tsx</code> and save to
          reload.
        </p>

        <a
          className="text-cyan-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about SPWR
        </a>

        <Modal />
      </header>
    </div>
  );
}

export default App;
