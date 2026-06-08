import React from "react";
import styles from "./Sidebar.module.css";
import { Link, useNavigate } from "react-router-dom";

type sidebarProps = {
  mode?: "default" | "sell";
  onPost: () => void;
  onCancel: () => void;
};

function Sidebar({ mode, onPost, onCancel}: sidebarProps) {
  const navigate = useNavigate();

  const handleSell = () => {
    navigate("/sell");
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <Link to="/home" className={styles.sidebarLink}>
          Home
        </Link>
        <Link to="/my-ads" className={styles.sidebarLink}>
          My Ads
        </Link>
        <Link to="" className={styles.sidebarLink}>
          About Us
        </Link>
        <Link to="/settings" className={styles.sidebarLink}>
          Settings
        </Link>
      </nav>

      {mode === "sell" ? (
        <div className={styles.sellActions}>
          <button className={styles.postButton} onClick={onPost}>
            Post
          </button>
          <button className={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
        </div>
      ) : (
        <button onClick={handleSell} className={styles.sellBtn}>
          Sell Item +
        </button>
      )}
    </aside>
  );
}

export default Sidebar;
