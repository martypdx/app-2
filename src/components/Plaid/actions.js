import plaidAPI from '../../api/plaidAPI';

export const LINK_ACCOUNT = 'LINK_ACCOUNT';
export const LINKING_ACCOUNT = 'LINKING_ACCOUNT';
export const GOT_TRANSACTIONS = 'GOT_TRANSACTIONS';

export function linkAccount(public_token) {
  return dispatch => {
    dispatch({ type: LINKING_ACCOUNT });
    plaidAPI.postAccessToken(public_token)
      .then(accounts => {
        dispatch({ type: LINK_ACCOUNT, payload: accounts});
      })
      .catch(err => console.log(err));
  };
}

export function getTransactions(access_token) {
  return dispatch => {
    plaidAPI.getTransactions(access_token)
      .then(transactions => {
        dispatch({ type: GOT_TRANSACTIONS, payload: transactions});
      })
      .catch(err => console.log(err));
  };
}

