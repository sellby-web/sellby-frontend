import React from "react";
import Header from "../../../app/layout/Header";
import Sidebar from "../../../shared/components/Modal/Sidebar";
import AdForm from "../components/AdForm/AdForm";
import styles from "./AdDetailsPage.module.css";

function AdDetailsPage() {
  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <Sidebar mode="sell" onPost={() => {}} onCancel={() => {}} />
        <AdForm />
      </main>
    </div>
  );
}

export default AdDetailsPage;
