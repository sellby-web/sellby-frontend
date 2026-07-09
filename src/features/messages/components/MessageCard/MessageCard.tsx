import styles from "./MessageCard.module.scss";

type MessageCardProps = {
  name: string;
  unreadCount: number;
  imageUrl?: string;
  onClick?: () => void;
};

function MessageCard({ name, unreadCount, imageUrl, onClick }: MessageCardProps) {
  return (
    <div className={styles.messageCard} onClick={onClick}>
      <div className={styles.messageCardAvatarContainer}>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="avatar"
            className={styles.messageCardAvatar}
          />
        )}
      </div>
      <h3 className={styles.avatarName}>{name}</h3>
      {unreadCount > 0 && (
        <div className={styles.unreadIndicator}>{unreadCount}</div>
      )}
    </div>
  );
}

export default MessageCard;
