import styles from "./Button.module.scss";

import { ButtonProps } from "./types";

export const Button = ({text}: ButtonProps) => {
  return (
   <button className={styles.button}>
       <span>{text}</span>
   </button>
  );
};
