import React, { useContext } from "react";
import styles from ".//../styles/CartMobile.module.css";
import CartIconMobile from ".//../public/images/svg/cart-m.svg";
import CartIconMobileFilled from "./../public/images/svg/cart-m-filled-01.svg";
import { RostoContext } from "../context/rostoContext";
import Link from "next/link";
import Image from "next/image";

const CartMobile = ({ onCartClick }) => {
  const { cartItems } = useContext(RostoContext);
  const numberOfItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div className={styles.mcart}>
      <Link href="/cart">
        <div className={styles.mcartimg} onClick={onCartClick}>
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
            <span className={styles.cartItems}>{numberOfItems}</span>
          ) : (
            ""
          )}
        </div>
      </Link>
      <Link href="/cart">
        <p onClick={onCartClick}>Cart</p>
      </Link>
    </div>
  );
};

export default CartMobile;
