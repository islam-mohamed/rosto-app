import React, { useContext } from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { RostoContext } from "../../context/rostoContext";
import { useRouter } from "next/router";
import Head from "next/head";
import CounterInc from "../../public/images/svg/counterincr.svg";
import CounterDec from "../../public/images/svg/counterdecr.svg";

const Starters = () => {
  const rostoData = useContext(RostoContext);
  const router = useRouter();
  const starter = rostoData.starters.find(
    (product) => product.id === router.query.id
  );

  const [quantity, setQuantity] = useState(1);

  const quantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const quantityDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  if (!starter) {
    return <p> loading</p>;
  }

  return (
    <div className="container">
      <Head>
        <title>Rosto - {starter.name}</title>
      </Head>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <Image src={starter.imageUrl} alt="deal" width="500" height="258" />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productDescription}>
            <h2>{starter.name}</h2>
            <p>{starter.desc}</p>
          </div>

          <div className={styles.quantity}>
            <h2>quantity:</h2>
            <div className={styles.counter}>
              {quantity <= 1 && (
                <Image
                  className={styles.counterimage}
                  src={CounterDec}
                  alt="decrease quantity"
                  title="decrease quantity"
                  width="40"
                  height="40"
                />
              )}
              {quantity > 1 && (
                <Image
                  src={CounterDec}
                  alt="decrease quantity"
                  title="decrease quantity"
                  width="40"
                  height="40"
                  onClick={quantityDecrement}
                />
              )}
              <div className={styles.counternum}>
                <p>{quantity}</p>
              </div>
              <Image
                src={CounterInc}
                alt="increase quantity"
                title="increase quantity"
                width="40"
                height="40"
                onClick={quantityIncrement}
              />
            </div>
          </div>
          <div className={styles.price}>
            <h2>
              price: EGP <span>{starter.price * quantity}</span>
            </h2>
          </div>
          <button className={styles.rostobtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Starters;
