import React from "react";
import { Navigate } from "react-router-dom";
import { protectionTypes } from "../constants/authentication";
import { routes } from "../constants/routes";

const ProtectedRoute = (props) => {
  const {
    children,
    isLogged = false,
    protections = [],
    isAdmin = false,
  } = props;
  if (protections.includes(protectionTypes.isAdmin) && !isAdmin) {
    return <Navigate to={routes.HOME} />;
  }
  if (protections.includes(protectionTypes.isLogged) && !isLogged) {
    return <Navigate to={routes.LOGIN} />;
  }
  return children;
};

export default ProtectedRoute;
