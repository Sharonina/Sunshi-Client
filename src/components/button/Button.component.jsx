import React from "react";
import styles from "./Button.module.styl";
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
      //onClick={onClick}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
