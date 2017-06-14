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
        <p>One taste silent disco beltane, patchouli retreat. Tahini Hafiz tofu, ancient toxins rites of passage surrender chia seeds natural homebirth om Dr. Bronner's. Doula ecstatic dance transformative solstice third eye midwifery higher cosmic force medical marijuana papyrus font, organic raw cacao. Namaste. A Simple Shared account helps you and your partner easily budget, save, and talk about money. In good financial partnership, one plus one can equal anything.</p>
      </div>
    </div>
  );
}

export default LandingPage;