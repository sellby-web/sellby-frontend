import React from "react";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav className={styles.sidebarNav}>
        <a className={styles.sidebarLink}>Home</a>
        <a className={styles.sidebarLink}>My Ads</a>
        <a className={styles.sidebarLink}>Messages</a>
        <a className={styles.sidebarLink}>Settings</a>
      </nav>

      <button className={styles.sellBtn}>Sell Item +</button>
    </aside>
  );
}

export default Sidebar;
