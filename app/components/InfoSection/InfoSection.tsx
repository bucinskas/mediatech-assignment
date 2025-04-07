import { InfoSectionProps } from "./types";

import styles from "./InfoSection.module.scss";

export const InfoSection = ({text}: InfoSectionProps) => {
  return (
    <div className={styles.infoSection}>
      <p 
        className={styles.infoSection__text}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </div>
  );
};
