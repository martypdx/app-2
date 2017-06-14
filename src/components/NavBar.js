import React from 'react';
import logoWhite from '../photos/logoWhite.png';
import pigLogo from '../photos/pigLogo.png';
import '../css/NavBar.css';
import styled from 'styled-components';
import MobileNav from './MobileNav';
import { nameOfAnimation as Menu } from 'react-burger-menu';

export default function NavBar() {
  if(window.innerWidth < 500) return <MobileNav/>;
  
  return (
    <div className="NavBar">
      {/*<img src={pigLogo} className="navLogo" alt="logo" />*/}
      <ul className="ListContainer">
        <li>About</li>
        <li>Log In</li>
        <li>Learn More</li>
        <li><button className="navButton">Create Account</button></li>
      </ul>
    </div>
  );
}


