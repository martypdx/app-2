import React from 'react';
import GOODCENTS from '../photos/GOODCENTS.svg';
import '../css/NavBar.css';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { nameOfAnimation as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import { signout } from './Main/actions';

function NavBar({ user, signout }) {
  if (window.innerWidth < 500) return <MobileNav />;

  return (
    <div className="NavBar">
      <Link to="/"> <img src={GOODCENTS} className="navLogo" alt="logo" /></Link>
      <ul className="ListContainer">
        <Link to="/"><li>About</li></Link>
        {user
          ? <Link to="/" onClick={signout}><li>Log Out</li></Link>
          : <Link to="/auth/signin"><li>Log In</li></Link>
        }
        <li><Link to="/auth/signup" className="navButton">Create Account</Link></li>
      </ul>
    </div>
  );
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    signout() { dispatch(signout()); }
  })
)(NavBar)


