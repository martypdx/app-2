import React from 'react';
import logoWhite from '../photos/logoWhite.png';
import pigLogo from '../photos/pigLogo.png';
import '../css/NavBar.css';
import styled from 'styled-components';
import { nameOfAnimation as Menu } from 'react-burger-menu';

function NavBar() {
  return (
    <div className="NavBar">
      <img src={pigLogo} className="navLogo" alt="logo" />
      <ul className="ListContainer">
        <li>Features</li>
        <li>Blog</li>
        <li>Log In</li>
        <li><button className="navButton">Apply Now</button></li>
      </ul>
    </div>
  );
}


export default NavBar;