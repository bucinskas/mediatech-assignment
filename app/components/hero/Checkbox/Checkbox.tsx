'use client'

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  text: string;
  checked: boolean;
  onChange: () => void;
}

export const Checkbox = ({ text, checked, onChange }: CheckboxProps) => {
  return (
    <div className={styles.checkbox}>
      <label className={styles.checkbox__label}>
        <input
          type="checkbox"
          className={styles.checkbox__input}
          checked={checked}
          onChange={onChange}
        />
        <span className={styles.checkbox__text}>{text}</span>
      </label>
    </div>
  );
};