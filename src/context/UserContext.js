import { createContext } from "react";

export const UserContext = createContext({
  token: "",
  setToken: () => {},
  userInfo: {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    isAdmin: false,
    restaurant: {
      id: "",
      name: "",
    },
  },
  handleLogin: () => {},
  handleLogout: () => {},
});
