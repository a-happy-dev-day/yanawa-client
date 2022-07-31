import axios from 'axios';

const baseURL = '3.143.143.122:8080';

const API = axios.create({
  baseURL,
});

export default API;
