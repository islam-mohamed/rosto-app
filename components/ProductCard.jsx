import React from "react";
import Image from "next/image";
import styles from ".//../styles/ProductCard.module.css";
import { Link } from "next/link";

const ProductCard = ({ id, imgsrc, heading, desc, price }) => {
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
        <a
          href={`/products/${id}`}
          passHref={`/products/${id}`}
          className={styles.rostobtn}
        >
          order
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
