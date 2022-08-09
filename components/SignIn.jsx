import React from "react";
import styles from ".//../styles/SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <p className={styles.title}>Sign In</p>
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <a>
        <p className={styles.forgetpassword}>Forget Password?</p>
      </a>
      <button className={styles.rostobtn}>Sign In</button>
    </div>
  );
};

export default SignIn;