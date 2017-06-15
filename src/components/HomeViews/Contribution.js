import React from 'react';
import ATM from '../../photos/illustrationATM.png';
import { connect } from 'react-redux';
import { cashingOut } from '../Plaid/actions';

function Contribution({ piggybank }) {
  return (
    <div>
      <img src={ATM} alt="Cash out" />
      <h2>Nice job!</h2>
      <p>Ready to cash out ${piggybank.toFixed(2)}?</p>
      Good Job! Are you ready to donate?
      <button className="mainButton" onClick={() => cashingOut()}>Donate</button>
    </div>
  );
}

export default connect(
  state => ({
    user: state.user,
    piggybank: state.piggybank
  }),
  dispatch => ({
    cashingOut() { dispatch(cashingOut()); }
  })
)(Contribution);