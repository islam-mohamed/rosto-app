import styles from "./../../styles/Deals.module.css";
import Head from "next/head";
import SectionHeading from "./../../components/SectionHeading";
import ProductCard from "./../../components/ProductCard";
import data from "./../../api/data.js";

export async function getStaticProps() {
  return {
    props: { data },
  };
}

const Deals = (props) => {
  if (!props.data) {
    return "loading...";
  }

  return (
    <>
      <Head>
        <title>Rosto Egypt Offers and Deals</title>
      </Head>
      <div className="stretch">
        <div className={styles.dealssection}>
          <div className="container">
            <SectionHeading
              sectionh2={"exclusive deals"}
              viewAllLink="/deals"
            />
            <div className={styles.deals}>
              {props.data.deals.map(
                ({ id, cardImageUrl, desc, name, price }) => (
                  <ProductCard
                    key={id}
                    id={id}
                    imgsrc={cardImageUrl}
                    heading={name}
                    desc={desc}
                    price={price}
                    products="deals"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deals;
