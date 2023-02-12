import { React } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute({ isExamStart, navigateTo }) {
  return isExamStart ? <Outlet /> : <Navigate to={navigateTo} />;
}

export default ProtectedRoute;
