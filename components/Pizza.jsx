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
            {rostoData
              .map(({ id, imageUrl, desc, name, price }) => (
                <ProductCard
                  key={id}
                  id={id}
                  imgsrc={imageUrl}
                  heading={name}
                  desc={desc}
                  price={price[0]}
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
