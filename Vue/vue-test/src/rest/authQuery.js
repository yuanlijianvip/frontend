import axios from 'axios';

export default class AuthQuery {
  static login(username, password, autoLogin) {
    return axios.post('/api/login', { username, password, autoLogin }).then(res => {
      return res.data || '';
    }, (err) => {
      return Promise.reject(err);
    });
  }

  static getUserInfo() {
    return axios.get('/api/userInfo').then(res => {
      return res.data || '';
    }, (err) => {
      return Promise.reject(err);
    });
  }
}

