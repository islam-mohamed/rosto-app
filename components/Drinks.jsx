import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import styles from "./../styles/Pizza.module.css";
import ProductCard from "./ProductCard";
import { RostoContext } from "../context/rostoContext";
import desserts from "../pages/desserts";

const Drinks = () => {
  const rostoData = useContext(RostoContext);
  return (
    <div className="stretch">
      <div className={styles.pizzapastasection}>
        <div className="container">
          <SectionHeading sectionh2={`drinks`} viewAllLink={"/drinks"} />

          <div className={styles.pizzapasta}>
            {rostoData.drinks.map(({ id, name, imageUrl, price }) => (
              <ProductCard
                key={id}
                id={id}
                imgsrc={imageUrl}
                heading={name}
                price={price}
                products="drinks"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
