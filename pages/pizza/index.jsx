import styles from "./../../styles/Pizza.module.css";
import Head from "next/head";
import SectionHeading from "./../../components/SectionHeading";
import ProductCard from "./../../components/ProductCard";
import data from "./../../api/data.js";

export async function getStaticProps() {
  return {
    props: { data },
  };
}

const Pizza = (props) => {
  if (!props.data) {
    return "loading...";
  }

  return (
    <>
      <Head>
        <title>Rosto - Get Pizza Delivery from Rosto Egypt</title>
      </Head>
      <div className="stretch">
        <div className={styles.pizzapastasection}>
          <div className="container">
            <SectionHeading sectionh2={`pizza`} viewAllLink={"/pizza"} />

            <div className={styles.pizzapasta}>
              {props.data.pizza.map(
                ({ id, cardImageUrl, desc, name, price }) => (
                  <ProductCard
                    key={id}
                    id={id}
                    imgsrc={cardImageUrl}
                    heading={name}
                    desc={desc}
                    price={price[0]}
                    products="pizza"
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

export default Pizza;
