import { AuthResponse, getToken } from '../api/getToken';
import { useMutation, useQuery } from 'react-query';

import { QUERY_KEYS } from '../constants/queryKey';
import { USER_TOKEN_NAME } from '../constants';
import { useNavigate } from 'react-router-dom';

export const useGetUser = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const navigate = useNavigate();

  const { data, mutate } = useMutation(
    QUERY_KEYS.USER.ALL,
    () => getToken({ username, password }),
    {
      onSuccess: (res: AuthResponse) => {
        localStorage.setItem(USER_TOKEN_NAME, res.token);
        navigate('/project');
      },
      onError: (err: any) => {
        console.log(data);

        // TODO: 에러처리 개선
        const message = err.response.data.error.message;
        alert(message);
      },
    },
  );

  return {
    login: mutate,
  };
};
