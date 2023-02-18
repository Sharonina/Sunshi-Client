import React, { useContext } from "react";
import clsx from "clsx";
import styles from "./Login.module.styl";
import logo from "@/assets/sunshi1.png";
import { UserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { routes } from "@/utils/constants/routes";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState(undefined);
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const { setToken, setUserInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const { VITE_API_URL } = import.meta.env;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const myURL = `${VITE_API_URL}/users/login`;
    const data = {
      email,
      password,
    };
    const response = await fetch(myURL, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    });
    const json = await response.json();
    if (json.token && json.userInfo) {
      setToken(json.token);
      setUserInfo(json.userInfo);
      navigate(routes.HOME);
    }
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setErrors({ ...errors, email: undefined });

    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValue) {
      return setErrors({
        ...errors,
        email: "Please enter an email",
      });
    }

    if (!emailValue.match(emailRegex)) {
      return setErrors({
        ...errors,
        email: "Enter a valid email: email@domine.ext",
      });
    }
  };
  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setErrors({ ...errors, password: undefined });

    if (!passwordValue) {
      return setErrors({
        ...errors,
        password: "Please enter a password",
      });
    }

    if (passwordValue.length < 6) {
      return setErrors({
        ...errors,
        password: "Password must be greater than 6",
      });
    }
  };

  React.useEffect(() => {
    if (errors?.email || errors?.password || !email || !password) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [errors]);

  return (
    <form
      onSubmit={handleSubmit}
      className={styles.loginSection}
      data-testid="login-page"
    >
      <figure>
        <img src={logo} alt="sunshi logo" />
      </figure>
      <div>
        <p>Email</p>
        <input
          value={email}
          onChange={handleEmailChange}
          placeholder="shadmin@sunshi.com"
        />
        {errors?.email && <p className={styles.errorMessage}>{errors.email}</p>}
        <p>Password</p>
        <input
          onChange={handlePasswordChange}
          placeholder="**********"
          type="password"
          value={password}
        />
        {errors?.password && (
          <p className={styles.errorMessage}>{errors.password}</p>
        )}
      </div>
      <button
        className={clsx(isSubmitDisabled && styles.isSubmitDisabled)}
        disabled={isSubmitDisabled}
        type="submit"
      >
        Sign in
      </button>
    </form>
  );
};

export default Login;
