import Header from "../../../app/layout/Header";
import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import MessageCatalog from "../components/MessageCatalog/MessageCatalog";
import styles from "./MessagePage.module.scss";
import MessagePanel from "../components/MessagePanel/MessagePanel";
import { useState } from "react";

type User = {
  id: string;
  name: string;
  unreadCount: number;
};

{
  /** Mock data for demonstration purposes */
}
const mockMessages: Record<
  string,
  { id: string; text: string; isSent: boolean; timestamp?: string }[]
> = {
  "1": [
    { id: "1", text: "Hey, is it still available?", isSent: false },
    { id: "2", text: "Yes it is!", isSent: true, timestamp: "10:30 AM" },
  ],
  "2": [
    { id: "1", text: "What's the condition?", isSent: false },
    {
      id: "2",
      text: "Like new, barely used.",
      isSent: true,
      timestamp: "9:15 AM",
    },
  ],
};

function MessagePage() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const users = [
    {
      id: "1",
      name: "John Doe",
      unreadCount: 5,
    },
    {
      id: "2",
      name: "Jane Doe",
      unreadCount: 2,
    },
    {
      id: "3",
      name: "Alice Smith",
      unreadCount: 2,
    },
    {
      id: "4",
      name: "Bob Johnson",
      unreadCount: 0,
    },
    {
      id: "5",
      name: "Charlie Brown",
      unreadCount: 1,
    },
    {
      id: "6",
      name: "David Wilson",
      unreadCount: 3,
    },
    {
      id: "7",
      name: "Eve Davis",
      unreadCount: 4,
    },
    {
      id: "8",
      name: "Frank Miller",
      unreadCount: 0,
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.messagePageStyle}>
        <Sidebar />
        <main className={styles.messagePageContentStyle}>
          <div className={styles.messagePageCatalogStyle}>
            <h2 className={styles.messagePageTitle}>Messages</h2>
            <MessageCatalog userList={users} onSelectedUser={setSelectedUser} />
          </div>

          {selectedUser && (
            <div className={styles.panelSectionStyle}>
              <MessagePanel
                name={selectedUser.name}
                messages={mockMessages[selectedUser.id] || []}
                onDeleteClick={() => setSelectedUser(null)}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default MessagePage;
