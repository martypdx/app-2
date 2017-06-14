import * as actions from './constants';
import { combineReducers } from 'redux';
import * as plaidActions from '../Plaid/actions';

function user(state = null, action) {
  switch (action.type) {
    case actions.ADDED_USER:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function token(state = null, action) {
  switch (action.type) {
    case actions.GOT_TOKEN:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function accounts(state = null, action) {
  switch (action.type) {
    case plaidActions.LINK_ACCOUNT:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  token,
  accounts
});

export default rootReducer;