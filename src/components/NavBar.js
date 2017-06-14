import React from 'react';
import pigLogo from '../photos/pigLogo.png';
import '../css/NavBar.css';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { nameOfAnimation as Menu } from 'react-burger-menu';

export default function NavBar() {
  if (window.innerWidth < 500) return <MobileNav />;

  return (
      <div className="NavBar">
        {/*<img src={pigLogo} className="navLogo" alt="logo" />*/}
        <ul className="ListContainer">
          <Link to="/"><li>About</li></Link>
          <Link to="/auth/signin"><li>Log In</li></Link>
          <Link to="/home"><li>Learn More</li></Link>
          <Link to="/auth/signup"><li className="navButton">Create Account</li></Link>
        </ul>
      </div>
  );
}


