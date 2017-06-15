import React, { Component } from 'react';
import '../css/Home.css';
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


class Home extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { user } = this.props;

    if (!user) return <Redirect to="/" />;
    return (
      <section>
        <div className="Home">
          <div className="PiggyContainer">
            <PiggyBank />
          </div>
          <div className="UserContainer">
            <div className="UserBox">
              <h2>{user.name}</h2>
              <h3>{user.email}</h3>
            </div>
            <div className="ButtonsContainer">
              <div className="ButtonsBox"><Link to='/cashout'><button className="mainButton">Ready to Donate?</button></Link></div>
              <div className="ButtonsBox"><Link to='/cashout'><button className="mainButton">Ready to Cash Out?</button></Link></div>
            </div>
            <div className="LineGraphContainer">
            </div>
            <div className="TransactionsContainer">
              <Transactions />
            </div>
        </div>
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