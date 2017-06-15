import React from 'react';
import {  Link } from 'react-router-dom';
import saveYourWay from '../../photos/saveYourWay.jpg';
import '../../css/LandingPage.css';

function LandingPage() {
  return (
    <div className="Home">
      <img src={saveYourWay} className="backpack" alt="backpack" />
      <div className="welcomeHome">
        <h2 className="dash-trailing">This Is Good Cents.</h2>
        <p className="landing-text">Spare change to make change with good cents.</p>
        <Link to="/auth/signup"><li className="navButton">Sign Up Now</li></Link>
      </div>
    </div>
  );
}

export default LandingPage;