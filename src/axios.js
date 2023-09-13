import axios from "axios";
import store from "./store";

axios.defaults.baseURL = 'https://api1.samis.co.ke/api/v1/';
// axios.defaults.baseURL = 'http://localhost:9091/api/v1/';
// axios.defaults.baseURL = "https://vemapi.leonteqsecurity.com/";

axios.interceptors.request.use(async (config) => {
  const token = store.getters.getToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axios;
