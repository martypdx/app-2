import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import GOODCENTS from '../photos/GOODCENTS.svg';


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
          {/*<NavbarBrand><img src={GOODCENTS} className="navLogo" alt="logo"/></NavbarBrand>*/}
            <NavbarToggler onClick={this.toggleNavbar} />
            <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-item" href="/">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-item" href="/auth/signin">Log In</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-item" href="/auth/signup">Create Account</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
        </Navbar>
      </div>
        );
  }
}