import React from 'react';
import Transaction from './Transaction';

export default function Transactions({ transactions }) {
  return (
    <div>
      <ul>
        {transactions.map((transaction, i) => <Transaction
          key={i}
          {...transaction}
        />)}
      </ul>
    </div>
  );
}