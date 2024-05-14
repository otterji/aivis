import { useAuth } from '../hooks/useAuth';

export const Project = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h1>This is a Project page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
