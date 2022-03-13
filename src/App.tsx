import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="App-header bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center">
        <img src={logo} className="h-[40vmin] pointer-events-none motion-safe:animate-[spin_20s_linear_infinite]" alt="logo" />
        <p>
          Edit <code className="font-mono">src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-cyan-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
