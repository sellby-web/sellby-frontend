import styles from "./Header.module.css";

import React from "react";
import MessageButton from "../../shared/components/Button/MessageButton";
import ProfileButton from "../../shared/components/Button/ProfileButton";
import SearchBar from "../../shared/components/Button/SearchBar";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <span className={styles.logo}>
          <h1>Sellby</h1>
          <h1>MU</h1>
        </span>
        <SearchBar placeholder="Calculator fx 99..." />
      </div>
      <div className={styles.right}>
        <MessageButton
          label="Messages"
          count={5}
          onClick={() => console.log("Messages clicked")}
        />
        <ProfileButton
          name="Akiljith Kumar"
          avatarUrl="pass the actual avatar url here"
          onClick={() => console.log("Profile clicked")}
        />
      </div>
    </header>
  );
}

export default Header;
