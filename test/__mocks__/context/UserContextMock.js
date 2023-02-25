export const UserContextMock = {
  authorization: { token: "token", expireDate: "2323232323" },
  setAuthorization: () => {},
  setToken: () => {},
  userInfo: {
    _id: "1",
    first_name: "Sunshi",
    last_name: "Test",
    email: "test@sunshi.com",
    role: "admin",
    admin: false,
    restaurant: {
      id: "1",
      name: "Test restaurant",
    },
  },
  setUserInfo: () => {},
  //handleLogin: () => {},
  handleLogout: () => {},
};
