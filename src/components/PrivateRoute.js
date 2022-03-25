import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const isAuthenticated = (key) => {
  return localStorage.getItem(key) !== null;
};

export const PrivateRoute = ({ component: Component, ...rest }) => {
  let location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated("ampereshop-token") ? (
          <Component {...props} />
        ) : (
          <Navigate
            to={{
              pathname: "/auth",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
