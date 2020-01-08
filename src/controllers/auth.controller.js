import { API_URLS } from '../constants/API_URLS';
import Http from './api.controller';

const getToken = () => {
  return localStorage.getItem('token') || '';
};

const getRefresh = () => {
  return localStorage.getItem('refresh') || '';
};

let token = getToken();
let refresh = getRefresh();

const createJWT = (email, password) => {
  return Http.post(API_URLS.CREATE_JWT, { email, password }, true);
};

const verifyJWT = () => {
  return Http.post(API_URLS.VERIFY_JWT, { token }, true);
};

const refreshJWT = () => {
  return Http.post(API_URLS.REFRESH_JWT, { refresh }, true);
};

const setToken = (t) => {
  token = t;
  localStorage.setItem('token', token);
};

const setRefresh = (r) => {
  refresh = r;
  localStorage.setItem('refresh', refresh);
};

const AuthController =  {
  createJWT,
  verifyJWT,
  refreshJWT,
  setToken,
  setRefresh,
  token,
};

export default AuthController;
