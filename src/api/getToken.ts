import { HTTP, Response } from '../utils/http';

interface GetUserParams {
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
