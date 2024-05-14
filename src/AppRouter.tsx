import './App.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import { Login } from './pages/Login';
import { Project } from './pages/Project';
import { ProjectDetail } from './pages/ProjectDetail';
import { ProtectedRoute } from './routes/ProtectedRoute';

function AppRouter() {
  return (
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
      <Route
        path="/project/:projectId"
        element={
          <ProtectedRoute>
            <ProjectDetail />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default AppRouter;
