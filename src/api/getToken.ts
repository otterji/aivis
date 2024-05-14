import { HTTP } from '../utils/http';

export interface GetUserParams {
  username: string;
  password: string;
}

export interface AuthResponse {
  shortTermToken: string;
  token: string;
}

export const getToken = async (params: GetUserParams) => {
  const res = await HTTP.post<GetUserParams, AuthResponse>(
    `/authenticate`,
    params,
  );
  return res.data;
};
