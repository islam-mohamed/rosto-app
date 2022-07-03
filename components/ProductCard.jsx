import React from "react";
import Image from "next/image";
import styles from ".//../styles/ProductCard.module.css";
import { useRouter } from "next/router";

const ProductCard = ({ id, imgsrc, heading, desc, price }) => {
  const router = useRouter();
  const productPageLink = () => {
    router.push(`/products/${id}`);
  };

  return (
    <div className={styles.productcard}>
      <div className={styles.prodimg}>
        <Image
          src={imgsrc}
          alt="offer 01"
          width={900}
          height={512}
          objectFit="cover"
        />
      </div>
      <div className={styles.productcontent}>
        <h3>{heading}</h3>
        <p className={styles.description}>{desc}</p>
        <p className={styles.price}>egp {price}</p>
        <button className={styles.rostobtn} onClick={productPageLink}>
          order
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
