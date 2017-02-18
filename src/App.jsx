import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2017'
    }
  }

  changeDeadline(){
    this.setState({deadline: 'November 25, 2017'})
  }
  render() {
    return (
      <div className="App">
        <div className="AppTitle">
          Countdown to {this.state.deadline}
        </div>
        <div>
          <div className="timer Clock-days">14 days</div>
          <div className="timer Clock-hours">30 hours</div>
          <div className="timer Clock-minutes">15 minutes</div>
          <div className="timer Clock-seconds">20 seconds</div>
        </div>
        <input placeholder='new date'/>
        <button onClick={() => this.changeDeadline()}>
          Submit</button>
      </div>
    )
  }
}

export default App;
