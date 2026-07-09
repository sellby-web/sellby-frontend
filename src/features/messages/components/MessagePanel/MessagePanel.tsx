import { useState } from "react";
import styles from "./MessagePanel.module.scss";
import MessageBubble from "../MessageBubble/MessageBubble";

type message = {
  id: string;
  text: string;
  isSent: boolean;
  timestamp?: string;
};

type messagePanelProps = {
  name: string;
  avatarUrl?: string;
  messages: message[];
  onDeleteClick: () => void;
  onDeleteMessage?: () => void;
};

function MessagePanel({
  name,
  avatarUrl,
  messages,
  onDeleteClick,
  onDeleteMessage
}: messagePanelProps) {
  const [input, setInput] = useState("");
  return (
    <div className={styles.chatPanelContainer}>
      <div className={styles.chatHeader}>
        <button onClick={onDeleteClick} className={styles.backButton}>
          <img src="icons/BackIcon.svg" alt="back" className={styles.backIcon} />
        </button>
        <div className={styles.avatarContainer}>
          {avatarUrl && (
            <img src={avatarUrl} alt="avatar" className={styles.avatar} />
          )}
        </div>
        <h3 className={styles.name}>{name}</h3>
        <button className={styles.deleteButton} onClick={onDeleteMessage}>
          <img
            src="icons/DeleteIcon.svg"
            alt="delete"
            className={styles.deleteIcon}
          />
        </button>
      </div>

      <div className={styles.messagesContainer}>
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message.text}
            isSent={message.isSent}
            timestamp={message.timestamp}
          />
        ))}
      </div>

      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.messageInput}
          placeholder="Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className={styles.sendButton}>Send</button>
      </div>
    </div>
  );
}

export default MessagePanel;
