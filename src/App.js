import React from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/Main/LandingPage';
import Onboard from './components/Onboard';
import About from './components/About';
import Home from './components/Home';
import Auth from './components/Main/Auth';
import Transactions from './components/HomeViews/Transactions';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

function App({ user, accounts }) {
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
          {accounts &&
            <Route path="/home" component={Home} />
          }
          <Route path="/transactions" component={Transactions} />
        </Switch>
      </div>
    </Router>
  );
}

export default connect(state => ({ user: state.user }))(App);
