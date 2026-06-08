import styles from "./UploadImage.module.css";

function UploadImage() {
  return (
    <div className={styles.uploadContainer}>
      <button className={styles.uploadButton}>Upload Image
        <img
          src="/icons/UploadIcon.svg"
          alt="Upload"
          className={styles.uploadIcon}
        />
      </button>
      <div className={styles.imageGrid}>
        <div className={styles.imageBox}></div>
        <div className={styles.imageBox}></div>
        <div className={styles.imageBox}></div>
        <div className={styles.imageBox}></div>
      </div>
    </div>
  );
}

export default UploadImage;
