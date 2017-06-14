import React, { Component } from 'react';
import saveYourWay from '../photos/saveYourWay.jpg';
import styled from 'styled-components';
import '../css/Home.css';
import SetGoal from './SetGoal';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
var ProgressBar = require('progressbar.js');

class Home extends Component {
  constructor(props) {
    super(props);

    this.barHandler = this.barHandler.bind(this);
  }

  barHandler() {
    var circle = new ProgressBar.Line('.progress', {
      color: '#FCB03C',
      duration: 3000,
      easing: 'easeOut'
    });
    circle.animate(1);
  }

  render() {
    const { accounts } = this.props;
    if (!accounts) return <Redirect to="/" />;
    return (
      <div className="Home">
        <div className="BabyNav">
          <h3>Set Goal</h3>
          <h3>Explore</h3>
          <h3>My Goals</h3>
          {/*<div className="progress" id="progress"></div>*/}
        </div>
        <SetGoal />
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    accounts: state.user.plaid.accounts
  }))(Home));