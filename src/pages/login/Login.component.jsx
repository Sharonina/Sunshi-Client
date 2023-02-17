import React from "react";
import styles from "./Login.module.styl";
import logo from "@/assets/sunshi1.png";

const Login = () => {
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
      <button>Sign in</button>
    </section>
  );
};

export default Login;
