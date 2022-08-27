import React from "react";
import styles from ".//../styles/SignForm.module.css";
import Link from "next/link";

const SignForm = () => {
  return (
    <div className={styles.signIn}>
      <p className={styles.title}>Sign In</p>
      <input type="email" placeholder="Email*" name="email" />
      <input type="password" placeholder="Password*" name="password" />
      <div className={styles.siginLinks}>
        <a>
          <p className={styles.forgetpassword}>Forget Password?</p>
        </a>
        <Link href="/register">
          <p className={styles.forgetpassword}>Don&apos;t Have Account?</p>
        </Link>
      </div>
      <button className={styles.rostobtn}>Sign In</button>
    </div>
  );
};

export default SignForm;
