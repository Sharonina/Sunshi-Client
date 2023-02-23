import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import sushiImg from "@/assets/nigiri.png";
import styles from "./Home.module.styl";
import { useApi } from "@/hooks/useApi";
import { routes } from "@/utils/constants/routes";

const Home = () => {
  const {
    userInfo: { first_name },
    setUserInfo,
  } = useContext(UserContext);
  const { getWithAuthorization } = useApi();

  const getUser = async () => {
    const API = `${routes.USERS}/me`;
    const user = await getWithAuthorization(API);
    setUserInfo(user);
  };

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <section data-testid="home-page">
      <div className={styles.divContainer}>
        <figure>
          <img src={sushiImg} alt="" />
        </figure>
        <p className={styles.userGreeting}>Hi {first_name}!</p>
        <p>
          Let's create a fantastic dish for our customers sharing our passion
          for food, culture and innovation.
        </p>
        <p className={styles.thanks}>Thank you for being a part of our team!</p>
      </div>
    </section>
  );
};

export default Home;
