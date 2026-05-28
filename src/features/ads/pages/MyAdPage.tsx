import React from "react";
import Header from "../../../app/layout/Header";
import Sidebar from "../../../shared/components/Modal/Sidebar";
import ProductCatalog from "../../../shared/components/Modal/ProductCatalog";
import styles from "./MyAdPage.module.css";

function MyAdPage() {
  const products = [
    {
      id: 1,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
      variant: "my-ads",
    },
    {
      id: 2,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
      variant: "my-ads",
    },
    {
      id: 3,
      title: "Introduction to The Theory Of Computation - Micheal Sipser.",
      subject: "MSc CS (Software engineering)",
      price: 5.5,
      time: "2 hours ago",
      imageUrl: "",
      variant: "my-ads",
    },
  ];

  return (
    <div>
      <Header />
      <div className={styles.myAdsPageStyle}>
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

export default MyAdPage;
