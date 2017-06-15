import React from './react';

export default function Transaction({ name, amount }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{amount}</p>
    </div>
  );
}