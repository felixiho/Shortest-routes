import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {floydWarshall} from './floyd';

class App extends Component {


  render() {
    const Floyd = new floydWarshall();
    Floyd.floyd();
    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">SSG 308</h1>
          <h1 className="App-title">Group 16</h1>
        </header>
        
      </div>
    );
  }
}

export default App;
