import { AuthResponse, GetUserParams, getToken } from '../api/getToken';

import { QUERY_KEYS } from '../constants/queryKey';
import { USER_TOKEN_NAME } from '../constants';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

export const useGetUser = ({ username, password }: GetUserParams) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(
    QUERY_KEYS.USER.ALL,
    () => getToken({ username, password }),
    {
      onSuccess: (res: AuthResponse) => {
        localStorage.setItem(USER_TOKEN_NAME, res.token);
        navigate('/project');
      },
    },
  );

  return {
    login: mutate,
  };
};
