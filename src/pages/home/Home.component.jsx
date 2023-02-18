import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const Home = () => {
  const { token, userInfo } = useContext(UserContext);
  return <div data-testid="home-page">Home: {userInfo.first_name}</div>;
};

export default Home;
