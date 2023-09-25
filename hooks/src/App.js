import './App.css';
import React from 'react';
import Us from './Hooks/us';
import FibonacciUs from './Hooks/FibonacciUs';
import UseE from './Hooks/useE';
import WindowSize from './Hooks/WindowSize';

function App() {
  return (
    <div className="App">
      <Us />
      <br />
      <FibonacciUs />
      <UseE  />
      <WindowSize />
    </div>
  );
}

export default App;
