import React, { Component } from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/Main/LandingPage';
import About from './components/About';
import Home from './components/Home';
import Auth from './components/Main/Auth';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
// import UserTransactions from './Plaid/UserTransactions';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/auth" render={() => <Auth/>}/>
            <Route path="/about" component={About} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
