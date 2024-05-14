import { USER_TOKEN_NAME } from '../constants';
import { useGetProjects } from '../hooks/useGetProjects';
import { useNavigate } from 'react-router-dom';

export const Project = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProjects();
  const handleLogout = () => {
    localStorage.removeItem(USER_TOKEN_NAME);
    navigate('/login');
  };

  const headers = ['name', 'numberOfImages', 'created'];

  const sample = data?.collection.splice(0, 10);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Project page</h1>
      <button onClick={handleLogout}>Logout</button>
      {isLoading && <h1>Loading...</h1>}

      <table
        style={{ borderCollapse: 'collapse', width: '100%', marginTop: '30px' }}
      >
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sample?.map((x, idx) => (
            <tr key={idx}>
              <td style={{ textAlign: 'center' }}>{x.name}</td>
              <td style={{ textAlign: 'center' }}>{x.numberOfImages}</td>
              <td style={{ textAlign: 'center' }}>{x.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
