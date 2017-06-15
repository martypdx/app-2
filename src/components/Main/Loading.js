import React from 'react';
import Loader from 'halogen/PulseLoader';

export default function Loading({ user, accounts }) {
  return (
    <div>
      <h2 style={{ color: 'red' }}>LOADING...</h2>
      <p style={{ color: 'red' }}>Average Load Time: 10 seconds</p>
      <Loader color="#26A65B" size="16px" margin="4px"/>
    </div>
  );
}