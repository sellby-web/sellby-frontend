import { useNavigate, useLocation } from "react-router-dom";
import styles from "./MobileNav.module.scss";

function MobileNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={styles.mobileNav}>
      {/* Home */}
      <button
        className={`${styles.navItem} ${isActive("/") ? styles.active : ""}`}
        onClick={() => navigate("/")}
      >
        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
          <polyline points="9 21 9 12 15 12 15 21" />
        </svg>
        <span className={styles.navLabel}>Home</span>
      </button>

      {/* My Ads */}
      <button
        className={`${styles.navItem} ${isActive("/my-ads") ? styles.active : ""}`}
        onClick={() => navigate("/my-ads")}
      >
        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
        <span className={styles.navLabel}>My Ads</span>
      </button>

      {/* Sell — centre FAB */}
      <button className={styles.sellFab} onClick={() => navigate("/sell")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className={styles.sellIcon}>
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </button>

      {/* Messages */}
      <button
        className={`${styles.navItem} ${isActive("/messages") ? styles.active : ""}`}
        onClick={() => navigate("/messages")}
      >
        <div className={styles.iconWrapper}>
          <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span className={styles.badge}>5</span>
        </div>
        <span className={styles.navLabel}>Messages</span>
      </button>

      {/* Profile */}
      <button
        className={`${styles.navItem} ${isActive("/settings") ? styles.active : ""}`}
        onClick={() => navigate("/settings")}
      >
        <svg className={styles.navIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        <span className={styles.navLabel}>Profile</span>
      </button>
    </nav>
  );
}

export default MobileNav;
