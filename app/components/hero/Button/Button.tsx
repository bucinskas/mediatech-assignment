import styles from "./Button.module.scss";

export const Button = () => {
  return (
   <button className={styles.button}>
       <span>Copy Password</span>
   </button>
  );
};
