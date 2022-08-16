import React, { useState } from "react";
import styles from "./../styles/CartItem.module.css";
import Image from "next/image";
import CounterInc from "./../public/images/svg/counterincr.svg";
import CounterDec from "./../public/images/svg/counterdecr.svg";
import CounterDelete from "./../public/images/svg/delete.svg";

const CartItem = ({ id, img, title, price, quantity, size }) => {
  const [conterQuantity, setConterQuantity] = useState(quantity);

  const quantityIncrement = () => {
    setConterQuantity((prevQuantity) => prevQuantity + 1);
  };
  const quantityDecrement = () => {
    setConterQuantity((prevQuantity) => prevQuantity - 1);
  };

  let imageHeight = "";
  if (id.includes("deal") || id.includes("pizza") || id.includes("pasta")) {
    imageHeight = 100;
  } else {
    imageHeight = 51.6;
  }

  let pizzaSize = "";
  if (size === 0) {
    pizzaSize = "Small";
  }
  if (size === 1) {
    pizzaSize = "Medium";
  }
  if (size === 2) {
    pizzaSize = "Large";
  }

  return (
    <div className={styles.cartItem}>
      <div className={styles.imgGroup}>
        <Image
          src={img}
          alt={title}
          width="100"
          height={imageHeight}
          layout="fixed"
        />
        <p className={styles.title}>{title}</p>
        {pizzaSize && (
          <p className={styles.size}>
            Size: <span>{pizzaSize}</span>
          </p>
        )}
      </div>
      <div className={styles.prodGroup}>
        <div className={styles.counter}>
          {conterQuantity <= 1 && (
            <Image
              src={CounterDelete}
              alt="decrease quantity"
              title="decrease quantity"
              width="30"
              height="30"
              layout="fixed"
            />
          )}
          {conterQuantity > 1 && (
            <Image
              src={CounterDec}
              alt="decrease quantity"
              title="decrease quantity"
              width="30"
              height="30"
              layout="fixed"
              onClick={quantityDecrement}
            />
          )}
          <div className={styles.counternum}>
            <p>{conterQuantity}</p>
          </div>
          <Image
            src={CounterInc}
            alt="increase quantity"
            title="increase quantity"
            width="30"
            height="30"
            layout="fixed"
            onClick={quantityIncrement}
          />
        </div>
        <div className={styles.priceGroup}>
          <p>
            Price: <span>{price * conterQuantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
