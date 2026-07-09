import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

function ErrorPage() {
  return (
    <div className={styles.errorPageContainer}>
      <h1 className={styles.errorText}>Oops Page Not Found</h1>
      <p className={styles.subText}>The page you are looking for doesn't exist or has been moved.</p>
      <Link to="/" className={styles.homeButton}>
        Return Home
      </Link>
    </div>
  );
}

export default ErrorPage;
