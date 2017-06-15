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
            <div className="UserContainer">
              <div className="UserBox"></div>
              <div className="ButtonsContainer">
                <div className="ButtonsBox"><Link to='/cashout'><button className="mainButton">Ready to Cash Out?</button></Link></div>
                <div className="ButtonsBox"></div>
              </div>
            </div>
            <div className="LineGraphContainer">

            </div>
            <div className="TransactionsContainer">
              <Transactions />
            </div>
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