import React from "react";
import styles from "../styles/registersignin.module.css";
import RegisterForm from "../components/RegisterForm";
import SignForm from "../components/SignForm";

const registerSignIn = () => {
  return (
    <div className="container">
      <div className={styles.regsign}>
        <SignForm />
        <div className={styles.signInSeparator}></div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default registerSignIn;
