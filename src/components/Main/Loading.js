import React from 'react';
import Loader from 'halogen/ClipLoader';
import '../../css/About.css';

export default function Loading({ user, accounts }) {
  return (
    <div className="About">
      <h2>Synching your accounts now...</h2>
      <h2>Thanks for your patience!</h2>
      <Loader color="#0d97ff" size="16px" margin="4px"/>
      <p>Average Load Time: 10 seconds</p>
    </div>
  );
}