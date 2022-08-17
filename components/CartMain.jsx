import React, { useContext } from "react";
import styles from ".//../styles/CartMain.module.css";
import CartIcon from ".//../public/images/svg/cart.svg";
import CartIconFilled from "./../public/images/svg/cart-filled-01.svg";
import { RostoContext } from "../context/rostoContext";
import Link from "next/link";
import Image from "next/image";

const CartMain = () => {
  const { cartItems } = useContext(RostoContext);
  const numberOfItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className={styles.cart}>
      <div className={styles.cartimg}>
        {cartItems.length > 0 ? (
          <Image
            src={CartIconFilled}
            alt="cart"
            title="cart icon"
            width="40"
            height="40"
          />
        ) : (
          <Image
            src={CartIcon}
            alt="cart"
            title="cart icon"
            width="40"
            height="40"
          />
        )}
        {cartItems.length > 0 ? (
          <span className={styles.cartItems}>{numberOfItems}</span>
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

export default CartMain;
