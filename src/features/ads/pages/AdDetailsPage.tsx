import Header from "../../../app/layout/Header";
import Sidebar from "../../../shared/components/Modal/Sidebar";
import AdForm from "../components/AdForm/AdForm";
import styles from "./AdDetailsPage.module.css";
import { useNavigate } from "react-router-dom";

function AdDetailsPage() {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/home");
  };

  const handleOnPost = () => {
    console.log("Got to work on the API implementation");
  };

  return (
    <div>
      <Header />
      <main className={styles.mainContent}>
        <Sidebar mode="sell" onPost={handleOnPost} onCancel={handleCancel} />
        <AdForm />
      </main>
    </div>
  );
}

export default AdDetailsPage;
