import Header from "../../../app/layout/Header";
import ProductCatalog from "../../../shared/components/ProductCatalog/ProductCatalog";
import Sidebar from "../../../shared/components/Sidebar/Sidebar";
import styles from "./HomePage.module.css";

function HomePage() {
  const products = [
    {
      id: 1,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
    },
    {
      id: 2,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
    },
    {
      id: 3,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
    },
  ];
  return (
    <div>
      <Header />
      <div className={styles.homePageStyle}>
        <Sidebar />
        <main className={styles.productCatalog}>
          <ProductCatalog
            products={products}
            onCardClick={() => console.log("Card clicked")}
            onMessageClick={() => console.log("Message button clicked")}
          />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
