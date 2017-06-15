import React from 'react';
import Carousel from 'nuka-carousel';
import Goals from '../../photos/illustration-home-goal.png';
import ATM from '../../photos/illustrationATM.png';
import WithYou from '../../photos/illustrationWithYou.png';
import piggyBank from '../../photos/piggyBank.jpg';
import '../../css/Onboard.css';

export default function LandingCarousel( ) {
  return (
    <div>
      <Carousel className="About">
        <div>
          <img src={Goals} alt="Goals" />
          <h2>Welcome to Good Cents!</h2>
          <p className="onboard-text">Start using your digital "spare change" to save toward a goal, or contribute to something good.</p>
        </div>
        <div>
          <img src={ATM} alt="ATM" />
          <h2>How it works:</h2>
          <p className="onboard-text">Just link one of your bank accounts or credit cards to Good Cents....and let the savings being! </p>

        </div>
        <div>
          <img src={piggyBank} alt="ATM" />
          <h2>How it works:</h2>
          <p className="onboard-text">As you make purchases throughout the week, we'll track your transactions, tally your change to the nearest dollar, and deposit the difference into our digital piggy bank.</p>
          <p className="onboard-text">When you hit the $10 minimum savings threshold, cash out or save more!</p>
        </div>
        <div>
          <img src={WithYou} alt="WithYou" />
          <h2>Ready to get started?</h2>
          <p className="onboard-text">Click below to link your bank account.</p>
        </div>
      </Carousel>
    </div>
  );
}