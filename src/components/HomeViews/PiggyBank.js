import React from 'react';
import { connect } from 'react-redux';

function PiggyBank({ piggybank }) {
  return (
    <div>${ piggybank.toFixed(2) }</div>
  );
}

export default connect(
  state => ({ 
    user: state.user,
    transactions: state.transactions,
    piggybank: state.piggybank
  })
)(PiggyBank);