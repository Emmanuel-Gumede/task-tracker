import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import { AuthContext } from "./context/UserContext";

const LoggedIn = () => {
  const { state } = React.useContext(AuthContext);
  const location = useLocation();
  const accessToken = state.user.accessToken;

  return accessToken === undefined ? (
    <Navigate to="login" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default LoggedIn;
