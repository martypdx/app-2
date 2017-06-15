import React from 'react';
import piglogo from '../../photos/pigLogo.png';
import { connect } from 'react-redux';

function PiggyBank({ piggybank }) {
  return (
    <div>
      <img src={piglogo} className="backpack" alt="backpack" />
      <div>${piggybank.toFixed(2)}</div>
    </div>
  );
}

export default connect(
  state => ({
    user: state.user,
    transactions: state.transactions,
    piggybank: state.piggybank
  })
)(PiggyBank);