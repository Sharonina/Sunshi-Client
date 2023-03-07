import React from "react";
import styles from "./Button.module.styl";
import clsx from "clsx";

const Button = (props) => {
  const {
    children,
    OnClick,
    type = "primary",
    isHovereable = false,
    size,
  } = props;
  return (
    <button
      className={clsx(
        styles.button,
        styles[type],
        isHovereable && styles.hovereable,
        size && styles[size]
      )}
      onClick={OnClick}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
