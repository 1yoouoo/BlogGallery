/* eslint-disable @typescript-eslint/no-explicit-any */
import apiConfig from './apiConfig';

const service = {
  get: (url: string, params?: any) => {
    return apiConfig({
      url,
      params,
      method: 'GET',
    }).then((res) => res.data);
  },
  post: (url: string, data: any) => {
    return apiConfig({
      url,
      data,
      method: 'POST',
    }).then((res) => res.data);
  },
  delete: (url: string, data: any) => {
    return apiConfig({
      url,
      data,
      method: 'DELETE',
    }).then((res) => res.data);
  },
  put: (url: string, data: any) => {
    return apiConfig({
      url,
      data,
      method: 'PUT',
    }).then((res) => res.data);
  },
};

export default service;
