import './App.css';
import React from 'react';
import Us from './Hooks/us';
import FibonacciUs from './Hooks/FibonacciUs';
import UseE from './Hooks/useE';
import WindowSize from './Hooks/WindowSize';
import Sayac from './Hooks/Sayac';
import Render from './Hooks/Render';

function App() {
  return (
    <div className="App">
      <Us />
      <br />
      <FibonacciUs />
      <UseE  />
      <WindowSize />
      <Sayac />
      <Render />
    </div>
  );
}

export default App;
