import React from "react";
import styles from "./MessageButton.module.css";

type MessageButtonProps = {
  label: string;
  count?: number;
  onClick: () => void;
};

function MessageButton({ label, count, onClick }) {
  return (
    <button className={styles.messageButton} onClick={onClick}>
      <span className={styles.left}>
        <img
          src="/icons/MessageIcon.svg"
          alt="Messages"
          className={styles.messageIcon}
        />
        {count !== undefined && <span className={styles.messageBadge}>{count}</span>}
      </span>
      <span className={styles.messageLabel}>{label}</span>
    </button>
  );
}

export default MessageButton;
