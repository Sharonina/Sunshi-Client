import React from "react";

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  return token ? token : "";
};

const getUserInfoFromLocalStorage = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
  return userInfo ? userInfo : "";
};

export const useAuth = () => {
  const [token, setToken] = React.useState(getTokenFromLocalStorage());
  const [userInfo, setUserInfo] = React.useState(getUserInfoFromLocalStorage());

  const handleLogout = () => {
    setToken("");
    setUserInfo("");
  };

  React.useEffect(() => {
    localStorage.setItem("token", token);
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [token]);

  return { token, setToken, userInfo, setUserInfo, handleLogout };
};
