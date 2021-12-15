import axios from 'axios';
import BaseHttpService from './base-http.service';

interface authData { username: string; password: string; }

export default class AuthService extends BaseHttpService {
  async signin({username, password}: authData) {
    const result = await axios.post(`${this.BASE_URL}/auth/signin`, { username, password });
    const accessToken = result.data.accessToken;
    this.saveToken(accessToken);
    return username;
  }

  async signup({username, password}: authData) {
    await axios.post(`${this.BASE_URL}/auth/signup`, { username, password });
  }

  async signout() {
    this.removeToken();
  }
}