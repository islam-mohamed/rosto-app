import React, { useContext } from "react";
import { RostoContext } from "../context/rostoContext";
import styles from "./../styles/CartItem.module.css";
import Image from "next/image";
import CounterInc from "./../public/images/svg/counterincr.svg";
import CounterDec from "./../public/images/svg/counterdecr.svg";
import CounterDelete from "./../public/images/svg/delete.svg";

const CartItem = ({ id, img, title, price, quantity, size }) => {
  const { increaseItemCount, removeFromCart } = useContext(RostoContext);
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
          {quantity <= 1 && (
            <Image
              src={CounterDelete}
              alt="decrease quantity"
              title="decrease quantity"
              width="30"
              height="30"
              layout="fixed"
              onClick={() =>
                removeFromCart({
                  id,
                  img,
                  title,
                  size,
                  price,
                })
              }
            />
          )}
          {quantity > 1 && (
            <Image
              src={CounterDec}
              alt="decrease quantity"
              title="decrease quantity"
              width="30"
              height="30"
              layout="fixed"
              onClick={() =>
                removeFromCart({
                  id,
                  img,
                  title,
                  size,
                  price,
                })
              }
            />
          )}
          <div className={styles.counternum}>
            <p>{quantity}</p>
          </div>
          <Image
            src={CounterInc}
            alt="increase quantity"
            title="increase quantity"
            width="30"
            height="30"
            layout="fixed"
            onClick={() =>
              increaseItemCount({
                id,
                img,
                title,
                size,
                price,
              })
            }
          />
        </div>
        <div className={styles.priceGroup}>
          <p>
            Price: <span>{price * quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
