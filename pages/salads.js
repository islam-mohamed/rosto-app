import React from "react";
import Head from "next/head";
import Salads from "../components/Salads";

const starters = () => {
  return (
    <>
      <Head>
        <title>Rosto - Pick your Salad at Rosto Egypt</title>
      </Head>
      <Salads />
    </>
  );
};

export default starters;
