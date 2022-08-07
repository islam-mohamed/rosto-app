import React, { useContext } from "react";
import styles from "./../styles/Pizza.module.css";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";
import { RostoContext } from "../context/rostoContext";

const Pizza = ({ numberOfItems }) => {
  const rostoData = useContext(RostoContext);
  return (
    <div className="stretch">
      <div className={styles.pizzapastasection}>
        <div className="container">
          <SectionHeading sectionh2={`pizza`} viewAllLink={"/pizza"} />

          <div className={styles.pizzapasta}>
            {rostoData.pizza
              .map(({ id, cardImageUrl, desc, name, price }) => (
                <ProductCard
                  key={id}
                  id={id}
                  imgsrc={cardImageUrl}
                  heading={name}
                  desc={desc}
                  price={price[0]}
                  products="pizza"
                />
              ))
              .slice(0, numberOfItems)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
