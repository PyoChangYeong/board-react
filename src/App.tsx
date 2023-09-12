import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './views/SignUp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Signup/>
    </div>
  );
}

export default App;
