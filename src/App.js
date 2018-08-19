import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  /** 
   * @function floyd
   * @param {Array} InputGraph A Matrix of the graph
   * @return {Array} Array of the shortest distance between any two nodes
   * 
   * Find the shortest path among all pairs of nodes in a graph
   * 
   * InputGraph = [[0,3,5,6],
   *          [6,0,9,1],
   *          [0,6,0,2],
   *          [1,2,0,0]]
  */
  floyd(InputGraph){
    var InputGraph =[ [Infinity, 7,        9,       Infinity,  Infinity, 16],
                      [7,        Infinity, 10,       15,       Infinity, Infinity],
                      [9,        10,       Infinity, 11,       Infinity, 2],
                      [Infinity, 15,       11,       Infinity, 6,        Infinity],
                      [Infinity, Infinity, Infinity, 6,        Infinity, 9],
                      [16,       Infinity, 2,        Infinity, 9,        Infinity]
    ];
    //Sanitize User Input
    let sanitized = this.sanitize(InputGraph);
    console.log(sanitized);
    for (let k = 0; k < sanitized.length; k++) {
      for(let j = 0; j < sanitized.length; j++){
        for(let i = 0; i < sanitized.length; i++){
          if(sanitized[i][j] > sanitized[i][k] + sanitized[k][j]){
            sanitized[i][j] = sanitized[i][k] + sanitized[k][j];
          }
        }
      }  
    }
    console.log(InputGraph);
    console.log(sanitized);
  }

  /**
   * @function sanitize
   * @param {Array} unSanitized
   * @returns {Array} A sanitized version of the user's input
   */
  sanitize(unSanitized){
    let sanitized = [];
    let size = unSanitized.length;
    for (let i=0; i < size; i++){
      sanitized[i] = [];
      for(let j=0; j < size; j++){
        //Is the value a diagonal?
        if(i === j){
          sanitized[i][j] = 0;
        }
        //Is the value infinity?
        else if(!isFinite(unSanitized[i][j])){
          sanitized[i][j] = Infinity;
        }
        else{
          sanitized[i][j] = unSanitized[i][j];
        }
      }
    }
    return sanitized;
  }

  render() {
    this.floyd();
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
