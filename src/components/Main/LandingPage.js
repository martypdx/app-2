import React from 'react';
import { Link } from 'react-router-dom';
import saveYourWay from '../../photos/saveYourWay.jpg';
import coffee from '../../photos/coffee.svg';
import transport from '../../photos/transport.svg';
import burger from '../../photos/burger.svg';
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

        <span className="savings-wrapper">
          <span ><img className="item-icons" src={coffee} /></span>
          <span className="savings-text" >Daily Coffee:$3.25<img className="item-icons" src={arrow} />save .75 <img className="item-icons arrow" src={arrow} />$273 yearly savings</span><br></br>

          <span ><img className="item-icons" src={transport} /></span>
          <span className="savings-text">Daily Commute:$2.75<img className="item-icons arrow" src={arrow} />save .25 <img className="item-icons" src={arrow} />$91 yearly savings</span><br></br>


          <span ><img className="item-icons burger" src={burger} /></span>
          <span className="savings-text">Lunch:$7.50<img className="item-icons arrow" src={arrow} />save .50 <img className="item-icons" src={arrow} />$182 yearly savings</span>
        </span>

        <div className="welcomeHome welcomeHome-alt">
          <h1 className="dash-trailing">Treat Yourself.</h1>
          <p className="landing-text">Our users save an average of <b className="money">$860</b>.  What will you do with all of your Good Cents?</p>
        </div>
        <Link to="/auth/signup" className="hard-sell">Sign Up Now</Link>
      </div>
    </div>
  );
}

export default LandingPage;