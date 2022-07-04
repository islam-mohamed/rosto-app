import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import styles from ".//../styles/Deals.module.css";
import ProductCard from "./ProductCard";
import { RostoContext } from "../context/rostoContext";

const Deals = ({ numberOfItems }) => {
  const rostoData = useContext(RostoContext);
  return (
    <div className="stretch">
      <div className={styles.dealssection}>
        <div className="container">
          <SectionHeading sectionh2={"exclusive deals"} viewAllLink="/deals" />
          <div className={styles.deals}>
            {rostoData.deals
              .map(({ id, imageUrl, desc, name, price }) => (
                <ProductCard
                  key={id}
                  id={id}
                  imgsrc={imageUrl}
                  heading={name}
                  desc={desc}
                  price={price}
                  products="deals"
                />
              ))
              .slice(0, numberOfItems)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deals;
