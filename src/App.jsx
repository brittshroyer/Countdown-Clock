import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    }
  }

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline})
  }
  render() {
    return (
      <div className="App">
        <div className="AppTitle">
          Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <input
          placeholder='new date'
          onChange={event => this.setState({newDeadline: event.target.value})}
        />
        <button onClick={() => this.changeDeadline()}>
          Submit</button>
      </div>
    )
  }
}

export default App;
