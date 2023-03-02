import React from "react";
import clsx from "clsx";
import styles from "./StatusBar.module.styl";

function StatusBar(props) {
  const { steps, currentStep } = props;
  const stepIndex = steps.indexOf(currentStep);

  const stepList = steps.map((step, index) => {
    return (
      <div
        className={clsx(
          styles.stepContainer,
          index <= stepIndex && styles.complete
        )}
        key={index}
      >
        <div className={styles.stepCircle} />
        <div
          className={clsx(styles.stepTitle, current === step && styles.active)}
        >
          {step}
        </div>
      </div>
    );
  });

  return <div className={styles.statusBar}>{stepList}</div>;
}

export default StatusBar;
