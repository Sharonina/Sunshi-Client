import React from "react";

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
  const [userInfo, setUserInfo] = React.useState({});

  const handleLogout = () => {
    setAuthorization({ token: "", expireDate: "" });
    setUserInfo({});
  };

  React.useEffect(() => {
    localStorage.setItem("token", JSON.stringify(authorization));
  }, [authorization]);

  return {
    authorization,
    setAuthorization,
    userInfo,
    setUserInfo,
    handleLogout,
  };
};
