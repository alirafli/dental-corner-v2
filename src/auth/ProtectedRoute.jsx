import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./Auth";

const ProtectedRoute = () => {
  const { user } = useAuth();

  if (user) {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;