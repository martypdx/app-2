import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <Nav navbar>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/auth/signup">Log In</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Link Account</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}



/*import React from 'react';
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


export default NavBar;*/