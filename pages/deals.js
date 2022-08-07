import React from "react";
import Deals from "../components/Deals";
import Head from "next/head";

const deals = () => {
  return (
    <>
      <Head>
        <title>Rosto Egypt Offers and Deals</title>
      </Head>
      <Deals />
    </>
  );
};

export default deals;
