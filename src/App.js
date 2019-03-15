import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="display">
          <div className="preview">12312312313</div>
        </div>
        <div className="operators">
          <button className="operator">+</button>
          <button className="operator">-</button>
          <button className="operator">÷</button>
          <button className="operator">*</button>
        </div>
        <div className="numbers">
          <button className="number">1</button>
          <button className="number">2</button>
          <button className="number">3</button>
          <button className="number">4</button>
          <button className="number">5</button>
          <button className="number">6</button>
          <button className="number">7</button>
          <button className="number">8</button>
          <button className="number">9</button>
          <button className="clear">AC</button>
          <button className="number">0</button>
          <button className="operator">=</button>
        </div>
    </div>
    );
  }
}

export default App;