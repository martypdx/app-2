import React, { Component } from 'react';
import '../css/Home.css';
import SetGoal from './SetGoal';
var ProgressBar = require('progressbar.js');

class Home extends Component {
  constructor () {
    super();
    this.state = {

    };
    this.barHandler = this.barHandler.bind(this);
  }
  barHandler () {
    var circle = new ProgressBar.Line('.progress', {
      color: '#FCB03C',
      duration: 3000,
      easing: 'easeOut'
    });
    circle.animate(1);
  }

  render() {
    return (
      <div className="Home">
        <div className="BabyNav">
          <h3>Set Goal</h3>
          <h3>Explore</h3>
          <h3>My Goals</h3>
          {/*<div className="progress" id="progress"></div>*/}
        </div>
        <SetGoal/>
      </div>
    );
  }
}

export default Home;