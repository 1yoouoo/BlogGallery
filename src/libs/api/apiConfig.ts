import axios, { AxiosRequestConfig } from 'axios';

const HOST_URL =
  process.env.NODE_ENV === 'development'
    ? '/'
    : process.env.PRODUCTION_HOST_URL;

const API_CONFIG: AxiosRequestConfig = {
  baseURL: HOST_URL,
  withCredentials: true,
};

const apiConfig = axios.create(API_CONFIG);

export default apiConfig;
