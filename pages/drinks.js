import React from "react";
import Head from "next/head";
import Drinks from "../components/Drinks";

const desserts = () => {
  return (
    <>
      <Head>
        <title>Rosto - Pick your Drink at Rosto Egypt</title>
      </Head>
      <Drinks />
    </>
  );
};

export default desserts;
