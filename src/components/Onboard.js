import React from 'react';
import Carousel from 'nuka-carousel';
import Goals from '../photos/illustration-home-goal.png';
import piggyBank from '../photos/piggyBank.jpg';
import WithYou from '../photos/illustrationWithYou.png';
import PlaidAccountLink from './Plaid/PlaidAccountLink';
import Loading from './Main/Loading';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import '../css/Onboard.css';

function Onboard({ user, accounts, linking, location }) {
  if (linking) return <Loading/>;
  if (user && accounts) return <Redirect to="/home" />;
  return (
    <div>
      <Carousel className="About">
        <div>
          <img className="carousel-img"src={Goals} alt="Goals" />
          <h1 className="carousel-text">Make your regular purchase....</h1>
        </div>
        <div>
          <img src={piggyBank} alt="ATM" />
          <h1 className="carousel-text">And let us do the savings for you...automatically!</h1>
        </div>
        <div>
          <img src={WithYou} alt="WithYou" />
            {/*<h1 className="carousel-text">Link Your Bank Acount Now</h1>*/}
          <PlaidAccountLink />
        </div>
       
      </Carousel>
    </div>
  );
}

export default withRouter(connect(
  state => ({
    user: state.user,
    linking: state.linking,
    accounts: state.accounts
  }))(Onboard));