import React, { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';
import { USER_TOKEN_NAME } from '../constants';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const isLoggedin = localStorage.getItem(USER_TOKEN_NAME) || '';

  if (!isLoggedin) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};
