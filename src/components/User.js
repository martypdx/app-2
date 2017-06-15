import React from 'react';
import { connect } from 'react-redux';

function User({ name, email, accounts, }) {
  return (
    <div>
      {name}
      {email}
      {accounts}
      Pause Good Cents
      Delete Good Cents Account?
    </div>
  );
}

export default connect(
  state => ({ user: state.user }),
)(User);