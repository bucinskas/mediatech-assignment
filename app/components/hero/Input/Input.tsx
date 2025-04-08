'use client'

import styles from "./Input.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "../Button/Button";
import { Checkbox } from "../Checkbox";

export const Input = () => {
  const [password, setPassword] = useState("");
  const [options, setOptions] = useState({
    lowerCase: false,
    upperCase: false,
    specialSymbols: false,
    numbers: false
  });

  const generatePassword = () => {
    const length = 20;
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let chars = '';
    
    if (options.lowerCase) chars += lowercase;
    if (options.upperCase) chars += uppercase;
    if (options.specialSymbols) chars += special;
    if (options.numbers) chars += numbers;

    if (chars === '') chars = uppercase + lowercase + numbers + special;

    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  useEffect(() => {
    generatePassword();
  }, []);

  const handleCheckboxChange = (type: keyof typeof options) => {
    setOptions(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <>
      <div className={styles.input}>
        <input type="text" value={password} className={styles.input__input} readOnly />
        <button className={styles.input__button} onClick={generatePassword}>
          <Image src="/path2.png" alt="Refresh icon" width={20} height={20} />
        </button>
        <Button text="Copy Password" />
      </div>

      <div className={styles.input__checkboxes}>
        <Checkbox 
          text="lower case" 
          checked={options.lowerCase}
          onChange={() => handleCheckboxChange('lowerCase')} 
        />
        <Checkbox 
          text="upper case" 
          checked={options.upperCase}
          onChange={() => handleCheckboxChange('upperCase')} 
        />
        <Checkbox 
          text="special symbols" 
          checked={options.specialSymbols}
          onChange={() => handleCheckboxChange('specialSymbols')} 
        />
        <Checkbox 
          text="numbers" 
          checked={options.numbers}
          onChange={() => handleCheckboxChange('numbers')} 
        />
      </div>
    </>
  );
};
