import React from 'react';
import Loader from 'halogen/ClipLoader';
import '../../css/Onboard.css';

export default function Loading({ user, accounts }) {
  return (
    <div className="About">
      <h2>Synching your accounts now...</h2>
      <h2>Thanks for your patience!</h2>
      <p>Average Load Time: 10 seconds</p>
      <Loader color="#0d97ff" size="30px" margin="4px"/>
    </div>
  );
}