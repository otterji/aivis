import { BASE_URL, USER_TOKEN_NAME } from '../constants';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(USER_TOKEN_NAME);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export interface Response<T> {
  success: boolean;
  data: T;
  error: {
    code: string;
    message: string;
  } | null;
}

instance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
);

export const HTTP = {
  get: <ResponseType>(url: string): Promise<AxiosResponse<ResponseType>> =>
    instance.get(url),
  post: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
    config?: AxiosRequestConfig<ParamType>,
  ): Promise<AxiosResponse<ResponseType>> => instance.post(url, param, config),
};
