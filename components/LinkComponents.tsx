import Link from 'next/link';
import styles from "./Compontens.module.css";

interface MainLayout {
  href: string[];
  title: string[];
  description: string[];
}

export const LinkComponents = ({ description, href, title }: MainLayout) => {
  return (
    <div className={styles.grid}>
      <Link href={href[0]} className={styles.card} rel="noopener noreferrer">
        <h2>
          {title[0]} <span>-&gt;</span>
        </h2>
        <p>{description[0]}</p>
      </Link>

      <Link href={href[1]} className={styles.card} rel="noopener noreferrer">
        <h2>
          {title[1]} <span>-&gt;</span>
        </h2>
        <p>{description[1]}</p>
      </Link>
      <Link href={href[2]} className={styles.card} rel="noopener noreferrer">
        <h2>
          {title[2]} <span>-&gt;</span>
        </h2>
        <p>{description[2]}</p>
      </Link>
    </div>
  );
};
