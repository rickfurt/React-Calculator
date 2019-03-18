import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      display:0,
      store:[],
      initial:0
    }
    this.handleClick = this.handleClick.bind(this);
    this.clear = this.clear.bind(this);
  }

  handleClick(e){
    var joined = this.state.store.concat(e.target.value);

    this.setState({
      store: joined,
      display:joined
    })
  }

  clear(){
    this.setState({
      store:[],
      display:this.state.initial
    })
  }

  render() {
    return (
      <div className="app-container">
        <div className="display">
          <div className="preview" id="display" onChange={this.handleDisplay}>
            {this.state.display}
        </div>
        </div>
        
        <div className="operators">
          <button className="operator" id="add">+</button>
          <button className="operator" id="subtract">-</button>
          <button className="operator" id="divide" >÷</button>
          <button className="operator" id="multiply">*</button>
          <button className="operator" id="decimal">.</button>
        </div>
        <div className="numbers">
          <button className="number" id="one" value="1" onClick={this.handleClick}>1</button>
          <button className="number" id="two" value="2" onClick={this.handleClick}>2</button>
          <button className="number" id="three" value="3" onClick={this.handleClick}>3</button>
          <button className="number" id="four" value="4" onClick={this.handleClick}>4</button>
          <button className="number" id="five" value="5" onClick={this.handleClick}>5</button>
          <button className="number" id="six" value="6" onClick={this.handleClick}>6</button>
          <button className="number" id="seven" value="7" onClick={this.handleClick}>7</button>
          <button className="number" id="eight" value="8" onClick={this.handleClick}>8</button>
          <button className="number" id="nine" value="9" onClick={this.handleClick}>9</button>
          <button className="number" id="zero"value="0" onClick={this.handleClick}>0</button>
          
          <span className="clearfix">
            <button className="clear" id="clear" value="0" onClick={this.clear}>AC</button>
            <button className="operator" id="equals">=</button>
          </span>
        </div>
        <p className="credit">Design By Ricardo Furtado</p>
    </div>
    );
  }
}

export default App;