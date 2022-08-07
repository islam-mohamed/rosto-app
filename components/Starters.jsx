import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import styles from "./../styles/Pizza.module.css";
import ProductCard from "./ProductCard";
import { RostoContext } from "../context/rostoContext";

const Starters = () => {
  const rostoData = useContext(RostoContext);
  return (
    <div className="stretch">
      <div className={styles.pizzapastasection}>
        <div className="container">
          <SectionHeading sectionh2={`starters`} viewAllLink={"/starters"} />

          <div className={styles.pizzapasta}>
            {rostoData.starters.map(({ id, name, desc, imageUrl, price }) => (
              <ProductCard
                key={id}
                id={id}
                imgsrc={imageUrl}
                heading={name}
                desc={desc}
                price={price}
                products="starters"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starters;
