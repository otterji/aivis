import { HTTP, Response } from '../utils/http';

interface GetUserParams {
  username: string;
  password: string;
}

export const getUser = async (params: GetUserParams) => {
  const res = await HTTP.post<GetUserParams, Response<object>>(
    `/authenticate`,
    params,
  );

  return res;
};
