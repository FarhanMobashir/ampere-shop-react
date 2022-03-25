import React from "react";
import { Navigate, useLocation, Route } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContex";

export const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = React.useContext(AuthContext);
  let location = useLocation();

  if (!isAuthenticated()) {
    console.log("isAuthenticated: ", isAuthenticated());
    return <Navigate to="/auth" state={{ from: location }} />;
  } else {
    return children;
  }
};
