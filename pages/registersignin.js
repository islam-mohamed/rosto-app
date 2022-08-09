import React from "react";
import styles from "../styles/registersignin.module.css";
import Register from "../components/Register";
import SignIn from "../components/Signin";

const registerSignin = () => {
  return (
    <div className="container">
      <div className={styles.regsign}>
        <SignIn />
        <div className={styles.signInSeparator}></div>
        <Register />
      </div>
    </div>
  );
};

export default registerSignin;
