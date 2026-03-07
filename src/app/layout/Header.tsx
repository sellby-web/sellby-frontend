import styles from "./Header.module.css";

import React from "react";
import MessageButton from "../../shared/components/Button/MessageButton";
import ProfileButton from "../../shared/components/Button/ProfileButton";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
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
      </nav>
    </header>
  );
}

export default Header;
