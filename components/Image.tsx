import Image from "next/image";


import styles from "./Compontens.module.css";

export const ImageComponent = () => {
  return (
    <div className={styles.center}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </div>
  );
};
