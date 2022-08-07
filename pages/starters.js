import React from "react";
import Head from "next/head";
import Starters from "../components/Starters";

const starters = () => {
  return (
    <>
      <Head>
        <title>Rosto - Pick your Starter at Rosto Egypt</title>
      </Head>
      <Starters />
    </>
  );
};

export default starters;
