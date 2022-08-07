import React from "react";
import Pizza from "../components/Pizza";
import Head from "next/head";

const pizza = () => {
  return (
    <>
      <Head>
        <title>Rosto - Get Pizza Delivery from Rosto Egypt</title>
      </Head>
      <Pizza />
    </>
  );
};

export default pizza;
