import React from "react";
import styles from "../styles/Signin.module.css";
import { Paper } from "@mui/material";
import RegisterForm from "../components/RegisterForm";
import Head from "next/head";

const Register = () => {
  return (
    <>
      <Head>
        <title>Rosto - Create Account</title>
      </Head>
      <div className="stretch">
        <div className={styles.loginBg}>
          <div className="container">
            <div className={styles.sign}>
              <Paper sx={{ width: "100%", padding: "5rem" }}>
                <RegisterForm />
              </Paper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
