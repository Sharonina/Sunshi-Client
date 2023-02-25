import React, { useContext } from "react";
import clsx from "clsx";
import styles from "./Login.module.styl";
import logo from "@/assets/sunshi1.png";
import { UserContext } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";
import { routes } from "@/utils/constants/routes";
import { useApi } from "@/hooks/useApi/useApi";
import { isEmail, isEmpty, isPassword } from "@/utils/validations/validations";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState(undefined);
  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);
  const { setAuthorization } = useContext(UserContext);
  const { postWithoutAuthorization } = useApi();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = `/users/login`;
    const body = {
      email,
      password,
    };
    const data = await postWithoutAuthorization(apiUrl, body);
    if (!data) return;
    setAuthorization({ token: data.token, expireDate: data.expireDate });
    navigate(routes.HOME);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setErrors({ ...errors, email: undefined });
    const isEmailValid = isEmail(emailValue);
    const isEmailEmpty = isEmpty(emailValue);

    if (isEmailEmpty) {
      return setErrors({
        ...errors,
        email: "Please enter an email",
      });
    }

    if (!isEmailValid) {
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
    const isPasswordValid = isPassword(passwordValue);
    const isPasswordEmpty = isEmpty(passwordValue);

    if (isPasswordEmpty) {
      return setErrors({
        ...errors,
        password: "Please enter a password",
      });
    }

    if (!isPasswordValid) {
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
          data-testid="email-input"
        />
        {errors?.email && <p className={styles.errorMessage}>{errors.email}</p>}
        <p>Password</p>
        <input
          onChange={handlePasswordChange}
          placeholder="**********"
          type="password"
          value={password}
          data-testid="password-input"
        />
        {errors?.password && (
          <p className={styles.errorMessage}>{errors.password}</p>
        )}
      </div>
      <button
        className={clsx(isSubmitDisabled && styles.isSubmitDisabled)}
        disabled={isSubmitDisabled}
        type="submit"
        data-testid="submit-button"
      >
        Sign in
      </button>
    </form>
  );
};

export default Login;
