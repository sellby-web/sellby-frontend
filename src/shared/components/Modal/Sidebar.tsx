import React from "react";
import styles from "./Sidebar.module.css";

type sidebarProps = {
  mode?: "default" | "sell";
  onPost: () => void;
  onCancel: () => void;
};

function Sidebar({ mode, onPost, onCancel }: sidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <a className={styles.sidebarLink}>Home</a>
        <a className={styles.sidebarLink}>My Ads</a>
        <a className={styles.sidebarLink}>Messages</a>
        <a className={styles.sidebarLink}>Settings</a>
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
        <button className={styles.sellBtn}>Sell Item +</button>
      )}
    </aside>
  );
}

export default Sidebar;
