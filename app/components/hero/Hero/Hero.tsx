import styles from "./Hero.module.scss";

import { HeroProps } from "./types";

import { Input } from "../Input";

export const Hero = ({heading, description, secondaryDescription}: HeroProps) => {
  return (
    <section className={styles.hero}>
      <div>
        <h1 className={styles.hero__heading}>{heading}</h1>
        <p className={styles.hero__description}>
          {description}
        </p>
        <p className={styles.hero__description}>
          {secondaryDescription}
        </p>
      </div>
      <Input />
    </section>
  );
};
