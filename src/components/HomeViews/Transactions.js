import React, { Component } from 'react';
import '../../css/Transactions.css';
import { connect } from 'react-redux';
import { getTransactions } from '../Plaid/actions';
import Transaction from './Transaction';

class Transactions extends Component {
  
  componentWillMount () {
    this.props.getTransactions(this.props.user.plaid.access_token);
  }

  render () {
    return (
      <div className="Transactions">
        <h1 className="headers">Transactions</h1>
        { this.props.transactions && 
        this.props.transactions.map((trans, i) => {
          return <Transaction
          key={i} 
          {...trans} />;
        })}
      </div>
    );  
  }
}

export default connect(
  state => ({ 
    user: state.user,
    transactions: state.transactions 
  }),
  dispatch => ({
    getTransactions() { dispatch(getTransactions()); }
  })
)(Transactions);