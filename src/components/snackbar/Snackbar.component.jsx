import React from "react";
import styles from "./Snackbar.module.styl";
import clsx from "clsx";

const Snackbar = (props) => {
  const { isOpen, snackbar } = props;
  return (
    <div
      className={clsx(
        styles.snackbarContainer,
        styles[snackbar.severity],
        isOpen && styles.isOpen
      )}
      data-testid="snackbar-container"
    >
      {snackbar.message}
    </div>
  );
};

export default Snackbar;
