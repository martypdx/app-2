import React from 'react';
import {connect} from 'react-redux';
import { cashingOut } from '../Plaid/actions';

function Contribution({ cents }) {
  return (
    <div>
      Good Job! Are you ready to donate?
      <button>Donate Now</button>
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