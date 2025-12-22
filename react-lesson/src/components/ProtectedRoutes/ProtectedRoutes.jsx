import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const isAuthenticated = localStorage.getItem("token");

  if (!isAuthenticated) return <Navigate to='/login' replace />;

  return <Outlet />;
};

export default ProtectedRoutes;
