import React from "react";
import styles from "./AuthPage.module.css";
import background from "../assets/background.png";
import mascot from "../assets/sellby-masscot.png";
import { useState } from "react";

function AuthPage() {
  const [email, setEmail] = useState<string>("");
  const [otp, setOtp] = useState<string>("");
  const [step, setStep] = useState<"email" | "otp">("email");

  const handleProceed = () => {
    if (email) {
      setStep("otp");
    }
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.leftPane}>
        <img src={background} alt="background" className={styles.background} />
        <img src={mascot} alt="sellby-masscot" className={styles.masscot} />
      </div>

      <div className={styles.rightPane}>
        <span className={styles.logo}>
          <h1>Sellby</h1>
          <h1>MU</h1>
        </span>

        {step === "email" ? (
          <input
            type="text"
            placeholder="University Email"
            className={styles.emailInput}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <input
            type="text"
            placeholder="Enter otp to verify email"
            className={styles.emailInput}
            onChange={(e) => setOtp(e.target.value)}
          />
        )}
        <button className={styles.loginButton} onClick={handleProceed}>
          {step === "email" ? "Proceed" : "Login"}
        </button>
        <a href="" className={styles.termsLink}>
          Terms & Conditions
        </a>
      </div>
    </div>
  );
}

export default AuthPage;
