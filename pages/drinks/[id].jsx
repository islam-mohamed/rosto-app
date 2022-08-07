import React, { useContext } from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { RostoContext } from "../../context/rostoContext";
import { useRouter } from "next/router";
import Head from "next/head";

const Drinks = () => {
  const rostoData = useContext(RostoContext);
  const router = useRouter();
  const drink = rostoData.drinks.find(
    (product) => product.id === router.query.id
  );

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  if (!drink) {
    return <p> loading</p>;
  }

  return (
    <div className="container">
      <Head>
        <title>Rosto - {drink.name}</title>
      </Head>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <Image src={drink.imageUrl} alt="deal" width="500" height="258" />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productDescription}>
            <h2>{drink.name}</h2>
          </div>

          <div className={styles.quantity}>
            <h2>quantity:</h2>

            <input
              type="number"
              defaultValue={1}
              min={1}
              max={10}
              id="quantity"
              onChange={handleQuantity}
            ></input>
          </div>
          <div className={styles.price}>
            <h2>
              price: EGP <span>{drink.price * quantity}</span>
            </h2>
          </div>
          <button className={styles.rostobtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
