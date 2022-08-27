import React, { useContext } from "react";
import Head from "next/head";
import styles from "./../styles/Cart.module.css";
import SectionHeading from "../components/SectionHeading";
import CartItem from "../components/CartItem";
import Image from "next/image";
import EmptyCart from "./../public/images/svg/emtyCart.svg";
import { RostoContext } from "../context/rostoContext";
import { useRouter } from "next/router";

const Cart = () => {
  const { cartItems } = useContext(RostoContext);
  const totalPrice = cartItems.reduce((curr, item) => {
    return curr + item.price * item.quantity;
  }, 0);

  const router = useRouter();
  const checkoutPageLink = (e) => {
    e.preventDefault();
    router.push("/checkout");
  };

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
            {cartItems.length === 0 ? (
              <Image
                src={EmptyCart}
                alt="404 image"
                title="404 image"
                width="1920"
                height="1080"
              />
            ) : (
              <div className={styles.tocheckOut}>
                <p className={styles.totalPrice}>
                  Total: &nbsp; <span>{totalPrice}</span>
                </p>

                <button className={styles.rostobtn} onClick={checkoutPageLink}>
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
