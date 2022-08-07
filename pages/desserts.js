import React from "react";
import Head from "next/head";
import Desserts from "../components/Desserts";

const desserts = () => {
  return (
    <>
      <Head>
        <title>Rosto - Pick your Desserts at Rosto Egypt</title>
      </Head>
      <Desserts />
    </>
  );
};

export default desserts;
