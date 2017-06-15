import * as actions from './constants';
import { combineReducers } from 'redux';
import * as plaidActions from '../Plaid/actions';

function error(state = null, action) {
  switch (action.type) {
    case actions.AUTH_FAILED:
      return action.payload;
    case actions.ADDED_USER:
    case actions.LOGOUT:
      return null;
    default:
      return state;
  }
}

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

function linking(state = false, action) {
  switch (action.type) {
    case plaidActions.LINKING_ACCOUNT:
      return true;
    case plaidActions.LINK_ACCOUNT:
      return false;
    default:
      return state;
  }
}

function accounts(state = null, action) {
  switch (action.type) {
    case plaidActions.LINK_ACCOUNT:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function transactions(state = null, action) {
  switch (action.type) {
    case plaidActions.GOT_TRANSACTIONS:
      return action.payload;
    case actions.LOGOUT:
    case actions.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

function piggyBank(state = 0, action) {
  switch (action.type) {
    case actions.ADD_TRANSACTIONS:
      return action.payload;
    case actions.AUTH_FAILED:
      return 0;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user,
  token,
  linking,
  accounts,
  piggyBank,
  transactions,
  error
});

export default rootReducer;