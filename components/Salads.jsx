import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import styles from "./../styles/Pizza.module.css";
import ProductCard from "./ProductCard";
import { RostoContext } from "../context/rostoContext";

const Salads = () => {
  const rostoData = useContext(RostoContext);
  return (
    <div className="stretch">
      <div className={styles.pizzapastasection}>
        <div className="container">
          <SectionHeading sectionh2={`salads`} viewAllLink={"/salads"} />

          <div className={styles.pizzapasta}>
            {rostoData.salads.map(({ id, name, imageUrl, price }) => (
              <ProductCard
                key={id}
                id={id}
                imgsrc={imageUrl}
                heading={name}
                price={price}
                products="salads"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Salads;
