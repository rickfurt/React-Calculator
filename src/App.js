import React, { Component } from 'react';
import './App.css';
import * as math from 'mathjs';

class App extends Component {
  constructor(){
    super()
    this.state = {
      input:'',
      display:0,
      store:[],
      initial:0,
      result:'0',
    }
    this.handleEqual = this.handleEqual.bind(this);
  }

  handleClick = e => {
    const regExp = /^0*/;
    const first = this.state.result[0];
    var filter;
    
    if(first === '0'){
      filter =  this.state.result.replace(regExp,'');
    }else{
      filter = this.state.result;
    };

      this.setState({
        result:filter + e.target.value,
      })
  }

  clear = () => {
    this.setState({
      store:[],
      result:this.state.initial,
    })
  }

  handleEqual(){
    this.setState({
      result:  math.eval(this.state.result),
    })
  }

  render() {
    return (
      <div className="app-container">
        <div className="display">
          <div className="preview" id="display">
          {this.state.result}
        </div>
        </div>
        
        <div className="operators">
          <button className="operator" id="add" value="+" onClick={this.handleClick}>+</button>
          <button className="operator" id="subtract" value="-" onClick={this.handleClick}>-</button>
          <button className="operator" id="divide" value="/" onClick={this.handleClick}>÷</button>
          <button className="operator" id="multiply" value="*" onClick={this.handleClick}>*</button>
          <button className="operator" id="decimal" value=".">.</button>
        </div>
        <div className="numbers">
          <button className="number" id="seven" value="7" onClick={this.handleClick}>7</button>
          <button className="number" id="eight" value="8" onClick={this.handleClick}>8</button>
          <button className="number" id="nine" value="9" onClick={this.handleClick}>9</button>
          <button className="number" id="four" value="4" onClick={this.handleClick}>4</button>
          <button className="number" id="five" value="5" onClick={this.handleClick}>5</button>
          <button className="number" id="six" value="6" onClick={this.handleClick}>6</button>
          <button className="number" id="one" value="1" onClick={this.handleClick}>1</button>
          <button className="number" id="two" value="2" onClick={this.handleClick}>2</button>
          <button className="number" id="three" value="3" onClick={this.handleClick}>3</button>
          <button className="number" id="zero"value="0" onClick={this.handleClick}>0</button>
          
          <span className="clearfix">
            <button className="clear" id="clear" onClick={this.clear}>AC</button>
            <button className="operator" onClick={this.handleEqual} id="equals">=</button>
          </span>
        </div>
        <p className="credit">Design By Ricardo Furtado</p>

        <p className="credit">For Test Reasons</p>
        <p className="credit">Result W regex -- {this.state.display}</p>

        
    </div>
    );
  }
}

export default App;