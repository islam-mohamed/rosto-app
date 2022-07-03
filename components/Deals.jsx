import React from "react";
import SectionHeading from "./SectionHeading";
import styles from ".//../styles/Deals.module.css";
import Image from "next/image";
import ProductCard from "./ProductCard";

const Deals = () => {
  return (
    <div className="stretch">
      <div className={styles.dealssection}>
        <div className="container">
          <SectionHeading sectionh2={"exclusive deals"} viewAllLink="/deals" />
          <div className={styles.deals}>
            <ProductCard
              imgsrc={`/../public/images/deal-01.jpg`}
              heading={`Hut Savers Stuffed Crust Offer`}
              desc={` 1 Medium Cheese Stuffed Crust pizza + 1 Medium Beef & Cheddar`}
              price={`245.00`}
            />
            <ProductCard
              imgsrc={`/../public/images/deal-02.jpg`}
              heading={`Hut Savers Stuffed Crust Offer`}
              desc={` 1 Medium Cheese Stuffed Crust pizza + 1 Medium Beef & Cheddar`}
              price={`245.00`}
            />
            <ProductCard
              imgsrc={`/../public/images/deal-03.jpg`}
              heading={`Hut Savers Stuffed Crust Offer`}
              desc={` 1 Medium Cheese Stuffed Crust pizza + 1 Medium Beef & Cheddar`}
              price={`245.00`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
