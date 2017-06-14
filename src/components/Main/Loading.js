import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Loading({ user, accounts }) {
  if (accounts) return <Redirect to="/home" />;
  return (
    <div>LOADING...</div>
  );
}