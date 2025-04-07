import styles from "./Input.module.scss";

import Image from "next/image";

import { Button } from "../Button/Button";

export const Input = () => {
  return (
    <>
      <div className={styles.input}>
        <input type="text" value="8Gx&kc2yd%CPnw" className={styles.input__input} />
        <button className="refresh-btn">
          <Image src="/path2.svg" alt="refresh" width={20} height={20} />
        </button>
        <Button />
      </div>

      <div>
        <label>
          <input type="checkbox" />
          <span className="checkbox">lower case</span>
        </label>

        <label>
          <input type="checkbox" />
          <span className="checkbox">upper case</span>
        </label>

        <label>
          <input type="checkbox" />
          <span className="checkbox">special symbols</span>
        </label>
        
        <label>
          <input type="checkbox" />
          <span className="checkbox">numbers</span>
        </label>
      </div>
    </>
  );
};
