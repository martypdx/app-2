import React, { Component } from 'react';
import '../css/Home.css';
import SetGoal from './SetGoal';
import Contribution from './HomeViews/Contribution';
import Transactions from './HomeViews/Transactions';
import PiggyBank from './HomeViews/PiggyBank';
import {
  Redirect,
  Route,
  Link,
  withRouter
} from 'react-router-dom';
import { connect } from 'react-redux';
import { checkForToken } from './Main/actions';
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
    const { user } = this.props;
    if (!user) return <Redirect to="/" />;
    return (
      <section>
        <PiggyBank />
        <Link to='/cashout'><p>Ready to Cash Out?</p></Link>
        <Route path='/cashout' component={Contribution} />
        <Transactions />
      </section>
    );
  }
}

export default withRouter(connect(
  state => ({ user: state.user }),
  dispatch => ({
    checkForToken() { dispatch(checkForToken()); }
  })
)(Home));