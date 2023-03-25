import apiConfig from './apiConfig';

const service = {
  get: (url: any, params?: any) => {
    return apiConfig({
      url,
      params,
      method: 'GET',
    }).then((res) => res.data);
  },
  post: (url: any, data: any) => {
    return apiConfig({
      url,
      data,
      method: 'POST',
    }).then((res) => res.data);
  },
  delete: (url: any, data: any) => {
    return apiConfig({
      url,
      data,
      method: 'DELETE',
    }).then((res) => res.data);
  },
  put: (url: any, data: any) => {
    return apiConfig({
      url,
      data,
      method: 'PUT',
    }).then((res) => res.data);
  },
};

export default service;
