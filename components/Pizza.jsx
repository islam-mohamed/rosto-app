import React from "react";
import styles from "./../styles/Pizza.module.css";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

const Pizza = () => {
  return (
    <div className="stretch">
      <div className={styles.pizzapastasection}>
        <div className="container">
          <SectionHeading sectionh2={`pizza`} />
          <div className={styles.pizzapasta}>
            <ProductCard
              imgsrc={`/../public/images/pizza-01.jpg`}
              heading={`Hut Savers Stuffed Crust Offer`}
              desc={`Ranch base sauce with grilled chicken pieces, topped with
              mushroom slices, onions, mixed with Mozzarella and topped with
              tasty BBQ sauce and chopped parsley.`}
              price={`85.00`}
            />
            <ProductCard
              imgsrc={`/../public/images/pizza-02.jpg`}
              heading={`Hut Savers Stuffed Crust Offer`}
              desc={`Ranch base sauce with grilled chicken pieces, topped with
            mushroom slices, onions, mixed with Mozzarella and topped with
            tasty BBQ sauce and chopped parsley.`}
              price={`85.00`}
            />
            <ProductCard
              imgsrc={`/../public/images/pizza-03.jpg`}
              heading={`Hut Savers Stuffed Crust Offer`}
              desc={`Ranch base sauce with grilled chicken pieces, topped with
          mushroom slices, onions, mixed with Mozzarella and topped with
          tasty BBQ sauce and chopped parsley.`}
              price={`85.00`}
            />
            <ProductCard
              imgsrc={`/../public/images/pizza-04.jpg`}
              heading={`Hut Savers Stuffed Crust Offer`}
              desc={`Ranch base sauce with grilled chicken pieces, topped with
        mushroom slices, onions, mixed with Mozzarella and topped with
        tasty BBQ sauce and chopped parsley.`}
              price={`85.00`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
