import styles from "./Hero.module.scss";

import { Input } from "../Input";

export const Hero = () => {
  return (
    <section className={styles.hero}>
        <div>
            <h1 className={styles.hero__heading}>Generate strong passwords</h1>
            <p className={styles.hero__description}>Upgrade the security of your online accounts.</p>
            <p className={styles.hero__description}>Create strong passwords that are completely random and impossible to guess.</p>
        </div>

        <Input/>
    </section>
  );
};
