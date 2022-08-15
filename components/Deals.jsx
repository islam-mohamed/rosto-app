import SectionHeading from "./SectionHeading";
import styles from ".//../styles/Deals.module.css";
import ProductCard from "./ProductCard";
import data from "../api/data";

const Deals = ({ numberOfItems }) => {
  const rostoData = data;
  return (
    <div className="stretch">
      <div className={styles.dealssection}>
        <div className="container">
          <SectionHeading sectionh2={"exclusive deals"} viewAllLink="/deals" />
          <div className={styles.deals}>
            {rostoData.deals
              .map(({ id, cardImageUrl, desc, name, price }) => (
                <ProductCard
                  key={id}
                  id={id}
                  imgsrc={cardImageUrl}
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
