import React from 'react';
import Loader from 'halogen/ClipLoader';
import '../../css/Contribution.css';

export default function ContributionLoading({ user, accounts }) {
  return (
    <div className="Contribution">
      <h2>Contacting your bank...</h2>
      <h2>Transfering funds now...</h2>
      <p>Average Load Time: 5 seconds</p>
      <Loader color="#0d97ff" size="30px" margin="4px"/>
    </div>
  );
}