import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import styles from "./../styles/Pizza.module.css";
import ProductCard from "./ProductCard";
import { RostoContext } from "../context/rostoContext";
import desserts from "../pages/desserts";

const Desserts = () => {
  const rostoData = useContext(RostoContext);
  return (
    <div className="stretch">
      <div className={styles.pizzapastasection}>
        <div className="container">
          <SectionHeading sectionh2={`desserts`} viewAllLink={"/desserts"} />

          <div className={styles.pizzapasta}>
            {rostoData.desserts.map(({ id, name, imageUrl, price }) => (
              <ProductCard
                key={id}
                id={id}
                imgsrc={imageUrl}
                heading={name}
                price={price}
                products="desserts"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desserts;
