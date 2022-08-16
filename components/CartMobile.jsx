import React, { useContext } from "react";
import styles from ".//../styles/CartMobile.module.css";
import CartIconMobile from ".//../public/images/svg/cart-m.svg";
import CartIconMobileFilled from "./../public/images/svg/cart-m-filled-01.svg";
import { RostoContext } from "../context/rostoContext";
import Link from "next/link";
import Image from "next/image";

const CartMobile = () => {
  const { cartItems } = useContext(RostoContext);
  return (
    <div className={styles.mcart}>
      <div className={styles.mcartimg}>
        {cartItems.length > 0 ? (
          <Image
            src={CartIconMobileFilled}
            alt="cart"
            title="cart icon"
            width="40"
            height="40"
          />
        ) : (
          <Image
            src={CartIconMobile}
            alt="cart"
            title="cart icon"
            width="40"
            height="40"
          />
        )}
        {cartItems.length > 0 ? (
          <span className={styles.cartItems}>{cartItems.length}</span>
        ) : (
          ""
        )}
      </div>
      <Link href="/cart">
        <p>Cart</p>
      </Link>
    </div>
  );
};

export default CartMobile;
