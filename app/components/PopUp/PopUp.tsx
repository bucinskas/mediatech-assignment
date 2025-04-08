import styles from "./PopUp.module.scss";

export const PopUp = () => {
  return (
    <div className={styles.popup}>
      <div className={styles.popup__popupContent}>
        <svg
          className={styles.popup__checkIcon}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
        <span>Copied to clipboard!</span>
      </div>
    </div>
  );
};
