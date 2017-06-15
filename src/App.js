import React, {Component}from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/Main/LandingPage';
import Onboard from './components/Onboard';
import About from './components/About';
import Home from './components/Home';
import Auth from './components/Main/Auth';
import { checkForToken } from './components/Main/actions';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.checkForToken();
  }

  render () {
    const {user} = this.props; 
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
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({ 
    checkForToken() { dispatch(checkForToken()); }  
  })
)(App);
