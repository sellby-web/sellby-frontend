import React from "react";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  title: string;
  subject: string;
  price: number;
  time: string;
  imageUrl?: string;
  onButtonClick: () => void;
  onCardClick: () => void;
};

function ProductCard({
  title,
  subject,
  price,
  time,
  imageUrl,
  onButtonClick,
  onCardClick,
}: ProductCardProps) {
  return (
    <div className={styles.productCard} onClick={onCardClick}>
      <div className={styles.productImage} />

      <div className={styles.productContent}>
        <div className={styles.productCardContentTop}>
          <h3 className={styles.productCardContentTitle}>
            Introduction To The Theory Of Computation - Micheal Sipser.
          </h3>
          <p className={styles.productCardContentSubject}>
            Subject: MSc CS (Software engineering)
          </p>
        </div>

        <div className={styles.productCardContentBottom}>
          <div className={styles.meta}>
            <span className={styles.productPrice}>€ 5.50</span>
            <span className={styles.postedTime}>2 hours ago</span>
          </div>

          <button className={styles.productEnquiryButton}>Message</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
