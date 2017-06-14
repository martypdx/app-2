import plaidAPI from '../../api/plaidAPI';

export const LINK_ACCOUNT = 'LINK_ACCOUNT';
export const LINKING_ACCOUNT = 'LINKING_ACCOUNT';

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

