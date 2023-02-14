import React from "react";
import { Navigate } from "react-router-dom";
import { protectionTypes } from "../constants/authentication";

const ProtectedRoute = (props) => {
  const {
    children,
    isLogged = false,
    protections = [],
    isAdmin = false,
  } = props;
  if (protections.includes(protectionTypes.ADMIN) && !isAdmin) {
    return <Navigate to="/home" />;
  }
  if (protections.includes(protectionTypes.LOGIN) && !isLogged) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;
