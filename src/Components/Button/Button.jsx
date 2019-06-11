import React from "react";
import styles from "./Button.module.css";

const Button = props => {
  const { onClick, color = "secondary", size = "small", ...others } = props;

  return (
    <button
      onClick={onClick}
      className={[
        styles.button,
        styles.ripple,
        styles[color],
        styles[size]
      ].join(" ")}
      {...others}
    >
      {props.children}
    </button>
  );
};

export default Button;
