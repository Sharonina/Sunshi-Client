import React from "react";
import styles from "./Button.module.styl";
import clsx from "clsx";

const Button = (props) => {
  const {
    children,
    onClick,
    type = "primary",
    isHovereable = false,
    size,
    className,
  } = props;
  return (
    <button
      className={clsx(
        styles.button,
        styles[type],
        isHovereable && styles.hovereable,
        size && styles[size],
        className && className
      )}
      onClick={onClick}
      data-testid="button"
    >
      {children}
    </button>
  );
};

export default Button;
