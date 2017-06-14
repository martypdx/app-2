import React, { Component } from 'react';
import plaidAPI from '../../api/plaidAPI';
import '../../css/Transactions.css';
class Transactions extends Component {
  constructor () {
    super();
    this.state = {

    };
  }
  
  ComponentDidMount () {
    console.log('yoyo');
  }

  render () {
    return (
      <div className="Transactions">
        <h1 className="headers">My Hittas</h1>

      </div>
    );  
  }
}

export default Transactions;