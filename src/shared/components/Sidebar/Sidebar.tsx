import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "My Ads", path: "/my-ads" },
  { label: "About Us", path: "/about" },
  { label: "Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div>Logo</div>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <button>Sell Item +</button>
    </aside>
  );
}

export default Sidebar;
