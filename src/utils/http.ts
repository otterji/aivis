import { BASE_URL, USER_TOKEN } from '../constants';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'content-type': 'application/json',
    Authorization: `Bearer ${USER_TOKEN}`,
  },
});

export interface Response<T> {
  success: boolean;
  data: T;
  error: {
    code: string;
    message: string;
  } | null;
}

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
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
