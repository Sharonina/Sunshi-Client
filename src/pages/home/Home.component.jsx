import React from "react";
import sushiImg from "@/assets/nigiri.png";

const Home = () => {
  return (
    <section data-testid="home-page">
      <figure>
        <img src={sushiImg} alt="" />
      </figure>
      <h1>Hi Sharonina!</h1>
      <p>
        Let's create a fantastic dish for our customers sharing our passion for
        food, culture and innovation.
      </p>
      <p>Thank you for being a part of our team!</p>
    </section>
  );
};

export default Home;
