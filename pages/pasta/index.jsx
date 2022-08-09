import styles from "./../../styles/Pizza.module.css";
import Head from "next/head";
import SectionHeading from "../../components/SectionHeading";
import ProductCard from "../../components/ProductCard";
import data from "../../api/data.js";

export async function getStaticProps() {
  return {
    props: { data },
  };
}

const Pasta = (props) => {
  if (!props.data) {
    return "loading...";
  }
  return (
    <>
      <Head>
        <title>Rosto - Get Pasta Delivery from Rosto Egypt</title>
      </Head>
      <div className="stretch">
        <div className={styles.pizzapastasection}>
          <div className="container">
            <SectionHeading sectionh2={`pasta`} viewAllLink={"/pasta"} />

            <div className={styles.pizzapasta}>
              {props.data.pasta.map(
                ({ id, cardImageUrl, desc, name, price }) => (
                  <ProductCard
                    key={id}
                    id={id}
                    imgsrc={cardImageUrl}
                    heading={name}
                    desc={desc}
                    price={price}
                    products="pasta"
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

export default Pasta;
