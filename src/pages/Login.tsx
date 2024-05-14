import { FormEvent, useState } from 'react';

import { USER_TOKEN_NAME } from '../constants';
import { getToken } from '../api/getToken';
import { useGetUser } from '../hooks/useGetToken';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { login } = useGetUser({ username, password });

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login();
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
