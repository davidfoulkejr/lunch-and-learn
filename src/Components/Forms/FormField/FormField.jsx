import React from "react";
import styles from "./FormField.module.css";

const FormField = ({
  name,
  value,
  color = "primary",
  variant = "default",
  onChange
}) => {
  return (
    <div className={styles.group}>
      <input
        className={[styles.inputField, styles[variant], styles[color]].join(
          " "
        )}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className={[styles.label, styles[color]].join(" ")}>{name}</label>
      <span className={[styles.base, styles[color]].join(" ")} />
    </div>
  );
};

export default FormField;
