import React, { Component } from 'react';
import '../../css/Transactions.css';
import { connect } from 'react-redux';
import { getTransactions } from '../Plaid/actions';


class Transactions extends Component {
  
  componentDidMount () {
    this.props.getTransactions(this.props.user.plaid.access_token);
  }

  render () {
    return (
      <div className="Transactions">
        <h1 className="headers">Transactions</h1>

      </div>
    );  
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    getTransactions() { dispatch(getTransactions()); }
  })
)(Transactions);