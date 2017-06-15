import React from 'react';
import '../../css/Transactions.css';

export default function Transaction({ name, amount, date, cents }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>${amount} / {date} / You earned ${cents.toFixed(2)} cents.</p>
    </div>
  );
}