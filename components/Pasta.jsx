import React, { useContext } from "react";
import SectionHeading from "./SectionHeading";
import styles from "./../styles/Pizza.module.css";
import ProductCard from "./ProductCard";
import { RostoContext } from "../context/rostoContext";

const Pasta = () => {
  const rostoData = useContext(RostoContext);
  return (
    <div className="stretch">
      <div className={styles.pizzapastasection}>
        <div className="container">
          <SectionHeading sectionh2={`pasta`} viewAllLink={"/pasta"} />

          <div className={styles.pizzapasta}>
            {rostoData.pasta.map(({ id, cardImageUrl, desc, name, price }) => (
              <ProductCard
                key={id}
                id={id}
                imgsrc={cardImageUrl}
                heading={name}
                desc={desc}
                price={price}
                products="pasta"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pasta;
