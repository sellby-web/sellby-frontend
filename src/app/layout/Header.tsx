import styles from "./Header.module.scss";
import MessageButton from "../../shared/components/Button/MessageButton";
import ProfileButton from "../../shared/components/Button/ProfileButton";
import SearchBar from "../../shared/components/SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleMessageClick = () => {
    navigate("/messages");
  };
  const handleProfileClick = () => {
    navigate("/settings");
  };
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <span className={styles.logo}>
          <h1>Sellby</h1>
          <h1>MU</h1>
        </span>
        <SearchBar placeholder="Calculator fx 99..." />
      </div>
      <div className={styles.headerRight}>
        <MessageButton
          label="Messages"
          count={5}
          onClick={handleMessageClick}
        />
        <ProfileButton
          name="Akiljith Kumar"
          avatarUrl="pass the actual avatar url here"
          onClick={handleProfileClick}
        />
      </div>
    </header>
  );
}

export default Header;
