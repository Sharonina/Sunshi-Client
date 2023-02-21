import { createContext } from "react";

export const UserContext = createContext({
  token: "",
  setToken: () => {},
  userInfo: {
    id: "",
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
