import React from "react";
import styles from ".//../styles/SignIn.module.css";

const Register = () => {
  return (
    <div className={styles.signIn}>
      <p className={styles.title}>Creat Account</p>
      <input type="text" placeholder="Frist Name*" name="fname" />
      <input type="text" placeholder="Last Name*" name="lname" />
      <input
        type="number"
        placeholder="Mobile Number* 01001234567"
        name="mobile"
      />
      <input type="email" placeholder="Email*" name="email" />
      <input type="password" placeholder="Password*" name="password" />
      <input
        type="password"
        placeholder="Confirm Password*"
        name="confirmpassword"
      />
      <button className={styles.rostobtn}>Create</button>
    </div>
  );
};

export default Register;
