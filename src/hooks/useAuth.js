import React from "react";
import { useApi } from "./useApi/useApi";
import { routes } from "@/utils/constants/routes";

const initialUser = {
  _id: "",
  first_name: "",
  last_name: "",
  email: "",
  role: "",
  admin: false,
  restaurant: {
    id: "",
    name: "",
  },
};

const getTokenFromLocalStorage = () => {
  const authorization = localStorage.getItem("token");
  const { token, expireDate } = JSON.parse(authorization || "{}");

  if (token && expireDate) {
    if (new Date(expireDate) > new Date()) {
      return { token, expireDate };
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("expireDate");
      return { token: "", expireDate: "" };
    }
  }

  return { token: "", expireDate: "" };
};

export const useAuth = () => {
  const [authorization, setAuthorization] = React.useState(
    getTokenFromLocalStorage()
  );

  const [userInfo, setUserInfo] = React.useState(initialUser);
  const { getWithAuthorization } = useApi();

  const handleLogout = () => {
    setAuthorization({ token: "", expireDate: "" });
    setUserInfo(initialUser);
  };

  React.useEffect(() => {
    localStorage.setItem("token", JSON.stringify(authorization));
  }, [authorization]);

  React.useEffect(() => {
    const getUser = async () => {
      const API = `${routes.USERS}/me`;
      const user = await getWithAuthorization(API, {
        headers: {
          Authorization: authorization.token,
        },
      });
      setUserInfo(user);
    };
    if (authorization.token) {
      getUser();
    }
  }, [authorization]);

  return {
    authorization,
    setAuthorization,
    userInfo,
    setUserInfo,
    handleLogout,
  };
};
