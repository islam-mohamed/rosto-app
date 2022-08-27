import React from "react";
import CheckOut from "../components/CheckOut";
import styles from "../styles/CheckOutPage.module.css";

const checkout = () => {
  return (
    <div className="stretch">
      <div className={styles.checkoutBg}>
        <div className="container">
          <div className={styles.checkoutLayout}>
            <CheckOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkout;
