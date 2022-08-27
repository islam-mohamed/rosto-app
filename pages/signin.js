import React from "react";
import styles from "../styles/Signin.module.css";
import SignForm from "../components/SignForm";
import { Paper } from "@mui/material";
import Head from "next/head";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Rosto - Sign In</title>
      </Head>
      <div className="stretch">
        <div className={styles.loginBg}>
          <div className="container">
            <div className={styles.sign}>
              <div className={styles.signinContainer}></div>
              <Paper sx={{ width: "100%", padding: "5rem" }}>
                <SignForm />
              </Paper>
              <div className={styles.signinContainer}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
