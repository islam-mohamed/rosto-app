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

const Drinks = (props) => {
  if (!props.data) {
    return "loading...";
  }

  return (
    <>
      <Head>
        <title>Rosto - Pick your Drinks at Rosto Egypt</title>
      </Head>
      <div className="stretch">
        <div className={styles.pizzapastasection}>
          <div className="container">
            <SectionHeading sectionh2={`pizza`} viewAllLink={"/pizza"} />

            <div className={styles.pizzapasta}>
              {props.data.drinks.map(({ id, name, desc, imageUrl, price }) => (
                <ProductCard
                  key={id}
                  id={id}
                  imgsrc={imageUrl}
                  heading={name}
                  desc={desc}
                  price={price}
                  products="drinks"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drinks;
