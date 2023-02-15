import React from "react";
import { useNavigate } from "react-router-dom";
import { protectionTypes } from "../constants/authentication";
import { routes } from "../constants/routes";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const {
    children,
    isLogged = false,
    protections = [],
    isAdmin = false,
  } = props;
  if (protections.includes(protectionTypes.isAdmin) && !isAdmin) {
    return navigate(routes.HOME);
  }
  if (protections.includes(protectionTypes.isLogged) && !isLogged) {
    return navigate(routes.LOGIN);
  }
  return children;
};

export default ProtectedRoute;
