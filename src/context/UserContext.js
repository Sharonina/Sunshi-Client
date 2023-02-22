import { createContext } from "react";

export const UserContext = createContext({
  authorization: { token: "", expireDate: "" },
  setAuthorization: () => {},
  setToken: () => {},
  userInfo: {
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
  },
  setUserInfo: () => {},
  //handleLogin: () => {},
  handleLogout: () => {},
});
