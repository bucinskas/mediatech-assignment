import Image from "next/image";

import styles from "./Header.module.scss";
import Link from "next/link";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <nav className={styles.header__nav}>
          <Link href="/" className={styles.header__logo} aria-label="Cybernews Logo - Go to homepage">
            <Image src="/logo.png" alt="Cybernews Logo" width={180} height={29} />
          </Link>
        </nav>
      </div>
    </header>
  );
};
