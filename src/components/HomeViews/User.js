import React from 'react';
import profilePic from '../../photos/profile-in-circle-christine.png';
import { connect } from 'react-redux';
import '../../css/User.css';

function User({ user, accounts }) {
  return (
    <div className="profile-sidebar">
      <div className="profile-userpic">
        <img src={profilePic} className="img-responsive" alt="" />
      </div>
      <div className="profile-usertitle">
        <div className="profile-usertitle-name">
          Yuval
        </div>
        <div className="profile-usertitle-job">
          yuval@me.com
        </div>
        <div className="profile-userbuttons">
          {accounts
            ? <button type="button" className="btn btn-success btn-sm">Accounts Linked</button>
            : <button type="button" className="btn btn-danger btn-sm">Accounts Not Linked</button>
          }
        </div>
      </div>
      <div className="profile-userbuttons">
        <button type="button" className="btn btn-success btn-sm">Pause Transactions</button>
        <button type="button" className="btn btn-danger btn-sm">Delete Account</button>
      </div>
    </div>
  );
}


export default connect(
  state => ({
    user: state.user,
    transactions: state.transactions,
    piggybank: state.piggybank
  })
)(User);