import React from "react";
import styles from "./Login.module.styl";
import logo from "@/assets/sunshi1.png";

const Login = () => {
  const funcion = async () => {
    const myURL = "https://burguerqueenapi.onrender.com/users/login";
    const data = {
      email: "shadmin@gmail.com",
      password: "luckychan",
    };
    const response = await fetch(myURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    const json = await response.json();
    console.log(json);
  };
  return (
    <section data-testid="login-page">
      <figure>
        <img src={logo} alt="sunshi logo" />
      </figure>
      <div>
        <p>Email</p>
        <input placeholder="shadmin@sunshi.com" />
        <p className={styles.errorMessage}>Please enter an email</p>
        <p>Password</p>
        <input placeholder="**********" type="password" />
        <p className={styles.errorMessage}>Please enter a password</p>
      </div>
      <button onClick={funcion}>Sign in</button>
    </section>
  );
};

export default Login;
