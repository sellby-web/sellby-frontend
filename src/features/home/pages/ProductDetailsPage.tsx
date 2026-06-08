import Header from "../../../app/layout/Header";
import Sidebar from "../../../shared/components/Modal/Sidebar";
import styles from "./ProductDetailsPage.module.css";
import { useNavigate } from "react-router-dom";

type ProductDetailsPageProps = {
  imgUrl?: string;
  productTitle?: string;
  name?: string;
  price?: number;
  timeStamp?: string;
};

function ProductDetailsPage({
  imgUrl,
  productTitle,
  name,
  price,
  timeStamp,
}: ProductDetailsPageProps) {
  const navigate = useNavigate();
  const handleMessageClick = () => {
    navigate("/messages");
  };
  const handleBackClick = () => {
    navigate("/home");
  };
  return (
    <div className={styles.detailsPageContainer}>
      <Header />
      <div className={styles.detailsPageContent}>
        <Sidebar />
        <main className={styles.detailsPageMain}>
          {/** Back Button */}
          <div>
            <button className={styles.backButton} onClick={handleBackClick}>
              <img
                src={"icons/BackIcon.svg"}
                alt="Back Icon"
                className={styles.backIcon}
              />
            </button>
          </div>

          <h2 className={styles.productTitle}>
            Introduction to Theory of Computation - Micheal Sipser. New and not
            damaged. Clean pages. Latest Edition.
          </h2>

          {/** Seller Information */}
          <div className={styles.sellerInfo}>
            <div className={styles.userImageContainer}>
              {imgUrl && (
                <img
                  src={imgUrl}
                  alt="User Image"
                  className={styles.userImage}
                />
              )}
            </div>
            <h3 className={styles.sellerName}>Akhiljith Kumar</h3>
            <button
              className={styles.messageButton}
              onClick={handleMessageClick}
            >
              Message
            </button>
          </div>

          {/** Product Images */}
          <div className={styles.imageGrid}>
            <div className={styles.imageBox}></div>
            <div className={styles.imageBox}></div>
            <div className={styles.imageBox}></div>
            <div className={styles.imageBox}></div>
          </div>

          <p className={styles.productDescription}>
            This is a brief description of the product. To ensure that the
            description style is applied to the content as expected. This will
            help with assuring that the css developement held for this project
            is going on its absolute peak. But gladly thats not the case.
          </p>

          <p className={styles.productDescription}>
            Subject: Computer Science <br />
            Author: Micheal Sipser <br />
          </p>

          <div className={styles.footer}>
            <h2 className={styles.price}>€5.00</h2>
            <p className={styles.timeStamp}> 2 hours ago</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
