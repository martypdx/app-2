import React from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import Credentials from './Credentials';
import Cents from '../../photos/cents.png';
import '../../css/About.css';

function Auth({ user, signin, signup, error, location, token }) {
  if (user) return <Redirect to="/onboard" />;
  return (
    <div className="About">
      <img src={Cents} alt="Cents" />
      <Switch>
        <Route path="/auth/signin" component={() => (
          <div>
            <h2>Sign into your account here:</h2>
            <Credentials submit={signin} />
            <p>Not yet registered? <Link to="/auth/signup">Sign Up</Link></p>
          </div>
        )} />
        <Route path="/auth/signup" render={() => (
          <div>
            <h2>Welcome! Create your account here:</h2>
            <Credentials submit={signup} allowName={true} />
            <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
          </div>
        )} />
      </Switch>
      {error &&
        <div>{error}</div>
      }
    </div>
  );
}

export default withRouter(connect(
  state => ({
    error: state.authError,
    user: state.user
  }),
  dispatch => ({
    signup(user) { dispatch(signup(user)); },
    signin(credentials) { dispatch(signin(credentials)); }
  })
)(Auth));