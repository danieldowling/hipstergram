import axios from 'axios';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import gql from 'graphql-tag'

export default class BaseHttpService {

  BASE_URL = process.env.BASE_API_URL || 'http://localhost:3001';
  _accessToken: string | null = null;

  client = new ApolloClient({
    link: new HttpLink({ uri: 'http://localhost:3001/graphql' }),
    cache: new InMemoryCache(),
  });

  async getUser(username: string) {
    const query = gql`{
      user(username: "${username}") {
        id,
        username,
        posts, {
          id
          title
        }
      }
    }`
    const { data: { user } } = await this.client.query({ query });
    return user;
  }

  async get(endpoint: string, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios.get(`${this.BASE_URL}/${endpoint}`, options)
      .catch(error => this._handleHttpError(error));
  }

  async post(endpoint: string, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios.post(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch(error => this._handleHttpError(error));
  }

  async delete(endpoint: string, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios.delete(`${this.BASE_URL}/${endpoint}`, options)
      .catch(error => this._handleHttpError(error));
  }

  async patch(endpoint: string, data = {}, options = {}) {
    Object.assign(options, this._getCommonOptions());
    return axios.patch(`${this.BASE_URL}/${endpoint}`, data, options)
      .catch(error => this._handleHttpError(error));
  }

  _handleHttpError(error: any) {
    const { statusCode } = error.response.data;

    if (statusCode !== 401) {
      throw error;
    } else {
      return this._handle401();
    }
  }

  _handle401() {
    window.location.hash = '/signin';
  }

  _getCommonOptions() {
    const token = this.loadToken();

    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this.loadToken();
  }

  saveToken(accessToken: string) {
    console.log('HERE');
    this._accessToken = accessToken;
    console.log({ localStorage });
    return localStorage.setItem('accessToken', accessToken);
  }

  loadToken() {
    const token = localStorage.getItem('accessToken');
    this._accessToken = token;
    return token;
  }

  removeToken() {
    localStorage.removeItem('accessToken');
  }
}