import Link from "next/link";
import styles from "../styles/NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2 className={styles.title}>Page Not Found!</h2>
        <p className={styles.message}>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/menu" className={styles.button}>
          Back to Menu
        </Link>
      </div>
    </div>
  );
}

export default NotFound;