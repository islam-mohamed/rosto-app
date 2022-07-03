import React from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { RostoContextProvider } from "../context/rostoContext";

function MyApp({ Component, pageProps }) {
  return (
    <RostoContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RostoContextProvider>
  );
}

export default MyApp;
