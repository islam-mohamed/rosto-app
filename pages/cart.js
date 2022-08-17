import React, { useContext } from "react";
import Head from "next/head";
import styles from "./../styles/Cart.module.css";
import SectionHeading from "../components/SectionHeading";
import CartItem from "../components/CartItem";
import { RostoContext } from "../context/rostoContext";

const cart = () => {
  const { cartItems } = useContext(RostoContext);
  const totalPrice = cartItems.reduce((curr, item) => {
    return curr + item.price * item.quantity;
  }, 0);
  return (
    <>
      <Head>
        <title>Cart</title>
      </Head>
      <div className="stretch">
        <div className={styles.pizzapastasection}>
          <div className="container">
            <SectionHeading sectionh2={"cart items"} />
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                img={item.imageUrl}
                title={item.name}
                quantity={item.quantity}
                price={item.price}
                size={item.size}
              />
            ))}
            <div className={styles.tocheckOut}>
              <p className={styles.totalPrice}>
                Total: &nbsp; <span>{totalPrice}</span>
              </p>

              <button className={styles.rostobtn}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
