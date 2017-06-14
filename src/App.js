import React, { Component } from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/Main/LandingPage';
import Onboard from './components/Onboard';
import Auth from './components/Main/Auth';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

function App({ user }) {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/auth" render={() => <Auth />} />
          {user &&
            <Route path="/onboard" component={Onboard} />
          }
        </Switch>
      </div>
    </Router>
  );
}

export default connect(state => ({ user: state.user }))(App);
