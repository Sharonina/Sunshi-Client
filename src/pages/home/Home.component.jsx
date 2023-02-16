import React from "react";
import sushiImg from "@/assets/nigiri.png";
import styles from "./Home.module.styl";

const Home = () => {
  return (
    <section data-testid="home-page">
      <div>
        <figure>
          <img src={sushiImg} alt="" />
        </figure>
        <p className={styles.userGreeting}>Hi Sharonina!</p>
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
