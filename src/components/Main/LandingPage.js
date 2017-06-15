import React from 'react';
import { Link } from 'react-router-dom';
import saveYourWay from '../../photos/saveYourWay.jpg';
import coffee from '../../photos/coffee.svg';
import shoe from '../../photos/shoe.svg';
import grocery from '../../photos/grocery.svg';
import arrow from '../../photos/arrow.svg';
import '../../css/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <div className="Home">
        <img src={saveYourWay} className="backpack" alt="backpack" />
      </div>
      <div className="welcomeHome">
        <h1 className="dash-trailing">This is Good Cents.</h1>
        <p className="landing-text">Let us turn your spare change into big savings....automatically!</p>
        <ul className="item-icons-wrapper">
          <li className="item-icons"><img src={coffee}/></li>
          <li className="item-icons"><img src={shoe}/></li>
          <li className="item-icons"><img src={grocery}/></li>
        </ul>
        <div className="welcomeHome welcomeHome-alt">
<h1 className="dash-trailing">Treat Yourself.</h1>
        </div>
        <Link to="/auth/signup"><li className="navButton">Sign Up Now</li></Link>
      </div>
    </div>
  );
}

export default LandingPage;