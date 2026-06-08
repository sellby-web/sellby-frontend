import React from "react";
import Header from "../../../app/layout/Header";
import Sidebar from "../../../shared/components/Modal/Sidebar";
import styles from "./ProfilePage.module.css";
import { useNavigate } from "react-router-dom";

type profilePageProps = {
  imageUrl?: string;
  name?: string;
  email?: string;
  onLogout?: () => void;
  onDeleteAccount?: () => void;
};

function ProfilePage({
  imageUrl,
  name,
  email,
  onLogout,
  onDeleteAccount,
}: profilePageProps) {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate("/home");
  };
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div className={styles.profilePageStyle}>
        <Sidebar />
        <main className={styles.profilePageContainer}>
          <div className={styles.backSection}>
            <button className={styles.backButton} onClick={handleBackClick}>
              <img
                src="icons/BackIcon.svg"
                alt="back"
                className={styles.backIcon}
              />
            </button>
            <h2 className={styles.pageTitle}>Profile</h2>
          </div>

          <div className={styles.userInfoSection}>
            <div className={styles.avatarContainer}>
              {imageUrl && (
                <img src={imageUrl} alt="avatar" className={styles.avatar} />
              )}
            </div>
            <div className={styles.userDetails}>
              <h3 className={styles.userName}>Akhiljith Kumar</h3>
              <p className={styles.userEmail}>akhiljith.kumar.2030@mumail.ie</p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Display Name"
            className={styles.input}
          />

          <div className={styles.actionsSection}>
            <button className={styles.deleteButton} onClick={() => {}}>
              <img
                src="icons/DeleteIcon.svg"
                alt="delete"
                className={styles.deleteIcon}
              />
              <span>Delete my account</span>
            </button>
            <button className={styles.logoutButton} onClick={handleLogout}>
              <img
                src="icons/LogoutIcon.svg"
                alt="logout"
                className={styles.logoutIcon}
              />
              <span>Logout</span>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProfilePage;
