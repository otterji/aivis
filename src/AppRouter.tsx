import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthProvider } from './hooks/useAuth';
import { Login } from './pages/Login';
import { Project } from './pages/Project';
import { ProtectedRoute } from './routes/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/project" replace />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/project"
          element={
            <ProtectedRoute>
              <Project />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
