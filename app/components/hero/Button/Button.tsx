import styles from "./Button.module.scss";

import { ButtonProps } from "./types";

export const Button = ({text, onClick}: ButtonProps) => {
  return (
   <button className={styles.button} onClick={onClick}>
       <span>{text}</span>
   </button>
  );
};
