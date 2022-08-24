import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContex";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  let location = useLocation();

  if (!isAuthenticated()) {
    return <Navigate to="/auth" state={{ from: location }} replace />;
  } else {
    return children;
  }
};
