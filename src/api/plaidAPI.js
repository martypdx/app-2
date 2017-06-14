import { request } from './request';

export default {
  postAccessToken(token) {
    return request.post('/me/accounts', { public_token: token });
  },

  postTransactions(token) {
    return request.post('/transactions', { access_token: token });
  }
};