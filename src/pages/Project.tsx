import { USER_TOKEN_NAME } from '../constants';
import { getProjects } from '../api/project/getProjects';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Project = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem(USER_TOKEN_NAME);
    navigate('/login');
  };

  useEffect(() => {
    const projects = getProjects();
    console.log(projects);
  }, []);

  return (
    <div>
      <h1>This is a Project page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
