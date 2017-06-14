import React from 'react';

export default function Loading({ user, accounts }) {
  return (
    <div>
      <h2 style={{ color: 'red' }}>LOADING...</h2>
      <p style={{ color: 'red' }}>Average Load Time: 10 seconds</p>
    </div>
  );
}