import styles from "./MessageCatalog.module.css";
import MessageCard from "../MessageCard/MessageCard";

type user = {
  id: string;
  name: string;
  unreadCount: number;
  imageUrl?: string;
}

type messageCatalogProps = {
  userList: user[];
  onSelectedUser: (user: user) => void;
};

function MessageForm({ userList, onSelectedUser }: messageCatalogProps) {
  return (
    <div className={styles.messageCatalog}>
      {userList.map((user) => (
        <MessageCard
          key={user.id}
          name={user.name}
          unreadCount={user.unreadCount}
          imageUrl={user.imageUrl}
          onClick={() => onSelectedUser(user)}
        />
      ))}
    </div>
  );
}

export default MessageForm;
