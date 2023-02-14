import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

const Button = (props) => {
  const { children, type = "primary", isHovereable = false } = props;
  return (
    <button
      className={clsx(
        styles.button,
        styles[type],
        isHovereable && styles.hovereable
      )}
    >
      {children}
    </button>
  );
};

export default Button;
