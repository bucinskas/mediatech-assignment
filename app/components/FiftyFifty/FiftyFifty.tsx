import Image from "next/image";

import styles from "./FiftyFifty.module.scss";

import { FiftyFiftyProps } from "./types";

export const FiftyFifty = ({ title, description, image, alt, inverted = false }: FiftyFiftyProps) => {
  return (
    <div className={styles.fiftyFifty}>
      <div className={styles.fiftyFifty__wrapper}>
      <div className={`${styles.fiftyFifty__container} ${inverted ? styles.fiftyFifty__inverted : ''}`}>
          <div className={styles.fiftyFifty__left}>
            <Image
              src={image}
              alt={alt}
              width={225}
              height={225}
              className={styles.fiftyFifty__image}
            />
          </div>
          <div className={styles.fiftyFifty__right}>
            <h2 className={styles.fiftyFifty__title}>{title}</h2>
            <p
              className={styles.fiftyFifty__description}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
