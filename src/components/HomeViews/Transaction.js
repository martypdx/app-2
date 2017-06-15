import React from 'react';

export default function Transaction({ name, amount, date }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{amount}</p>
      <p>{date}</p>
    </div>
  );
}