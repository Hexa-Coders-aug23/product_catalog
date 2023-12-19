import { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';

export const RequireAuth = () => {
  const { currentUser } = useContext(AuthContext);
  const { pathname } = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ pathname }} replace />;
  }

  return <Outlet />;
};
