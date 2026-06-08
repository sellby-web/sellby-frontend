import React from "react";
import styles from "./ProductCard.module.css";
import { useNavigate } from "react-router-dom";

type ProductCardProps = {
  title: string;
  subject: string;
  price: number;
  time: string;
  imageUrl?: string;
  variant?: "default" | "my-ads";
  onButtonClick: () => void;
  onCardClick: () => void;
  onDeleteClick?: () => void;
};

function ProductCard({
  title,
  subject,
  price,
  time,
  imageUrl,
  variant = "default",
  onButtonClick,
  onCardClick,
  onDeleteClick,
}: ProductCardProps) {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate("/product-details");
  };
  {/** Message click has to handled seperated cause currently the click triggers the card click*/}
  {/** Also I think the handle functions should be defined in the appropriate pages,
    either home or my-ads and passed down to the message card compoenent as props*/}
  const handleMessageClick = () => {
    navigate('/messages');
  };
  return (
    <div className={styles.productCard} onClick={handleCardClick}>
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

          {variant === "default" ? (
            <button className={styles.productEnquiryButton} onClick={handleMessageClick}>Message</button>
          ) : (
            <div className={styles.myAdsButtonContainer}>
              <button
                className={styles.productDeleteButton}
                onClick={onDeleteClick}
              >
                <img
                  src="/icons/DeleteIcon.svg"
                  alt="Delete"
                  className={styles.deleteIcon}
                />
              </button>
              <button
                className={styles.productViewButton}
                onClick={handleCardClick}
              >
                View
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
