import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = process.env.REACT_APP_API_ENDPOINT || 'http://localhost/api';
const timeout = (process.env.REACT_APP_API_TIME_OUT as unknown) as number;

export const axiosInstance = Axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

const requestHandler = (request: AxiosRequestConfig) => {
  // Modify request here
  request.headers.authorization = localStorage.getItem('token');
  return request;
};
const errorHandler = (error: any) => {
  // Handle errors

  if (typeof error !== 'undefined') {
    // Setup Error Message
  }

  if (typeof error.response !== 'undefined') {
    // Setup Generic Response Messages
    if (error.response.status === 401) {
      // 'UnAuthorized';
    } else if (error.response.status === 404) {
      // 'API Route is Missing or Undefined';
    } else if (error.response.status === 405) {
      // 'API Route Method Not Allowed';
    } else if (error.response.status === 422) {
      // Validation Message
    } else if (error.response.status >= 500) {
      // 'Server Error';
    }

    // Try to Use the Response Message
  }
  return Promise.reject(error);
};

const successHandler = (response: AxiosResponse) => {
  // Handle responses

  return response;
};

axiosInstance.interceptors.request.use((request) => requestHandler(request));
axiosInstance.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);
