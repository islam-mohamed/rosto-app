import React from "react";
import styles from "./../styles/Pizza.module.css";
import NotFound from "./../public/images/svg/404.svg";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Rosto - 404</title>
      </Head>
      <div className="stretch">
        <div className={styles.pizzapastasection}>
          <div className="container">
            <div className="image404">
              <Image
                src={NotFound}
                alt="404 image"
                title="404 image"
                width="1920"
                height="1080"
              />
            </div>
            <Link href="/">
              <button className="rostobtn">Back To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom404;
