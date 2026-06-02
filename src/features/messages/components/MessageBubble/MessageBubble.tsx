import React from "react";
import styles from "./MessageBubble.module.css";

type messageBubbleProps = {
    message: string;
    isSent: boolean;
    timestamp?: string;
}

function MessageBubble({ message, isSent, timestamp }: messageBubbleProps) {
  return (
    <div className={`${styles.wrapper} ${isSent ? styles.sentWrapper : styles.receivedWrapper}`}>
      <div
        className={`${styles.bubble} ${isSent ? styles.sent : styles.received}`}
      >
        <p className={styles.text}>{message}</p>
      </div>
      {timestamp && <span className={styles.timestamp}>{timestamp}</span>}
    </div>
  );
}

export default MessageBubble;
