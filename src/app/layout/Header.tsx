import styles from "./Header.module.css";

import React from "react";
import MessageButton from "../../shared/components/Button/MessageButton";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <MessageButton
          label="Messages"
          count={5}
          onClick={() => console.log("Messages clicked")}
        />
      </nav>
    </header>
  );
}

export default Header;
