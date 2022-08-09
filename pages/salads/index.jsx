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

const Salads = (props) => {
  if (!props.data) {
    return "loading...";
  }

  return (
    <>
      <Head>
        <title>Rosto - Pick your Salad at Rosto Egypt</title>
      </Head>
      <div className="stretch">
        <div className={styles.pizzapastasection}>
          <div className="container">
            <SectionHeading sectionh2={`pizza`} viewAllLink={"/pizza"} />

            <div className={styles.pizzapasta}>
              {props.data.salads.map(({ id, name, desc, imageUrl, price }) => (
                <ProductCard
                  key={id}
                  id={id}
                  imgsrc={imageUrl}
                  heading={name}
                  desc={desc}
                  price={price}
                  products="salads"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Salads;
