import { useState, useContext } from "react";
import { RostoContext } from "../../context/rostoContext";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { useRouter } from "next/router";
import Head from "next/head";
import CounterInc from "../../public/images/svg/counterincr.svg";
import CounterDec from "../../public/images/svg/counterdecr.svg";
import data from "../../api/data";

export async function getStaticProps({ params }) {
  return {
    props: { rostoData: data.drinks.find((item) => item.id === params.id) },
  };
}
export async function getStaticPaths() {
  const paths = data.drinks.map((item) => ({ params: { id: item.id } }));

  return {
    paths,
    fallback: true,
  };
}

const Drinks = (props) => {
  const { addToCart } = useContext(RostoContext);
  const router = useRouter();
  const drink = props.rostoData;

  const [quantity, setQuantity] = useState(1);

  const quantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const quantityDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  if (router.isFallback || !drink) {
    return <p> loading...</p>;
  }

  return (
    <div className="container">
      <Head>
        <title>Rosto - {drink.name}</title>
      </Head>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <Image src={drink.imageUrl} alt="deal" width="500" height="258" />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productDescription}>
            <h2>{drink.name}</h2>
          </div>

          <div className={styles.quantity}>
            <h2>quantity:</h2>
            <div className={styles.counter}>
              {quantity <= 1 && (
                <Image
                  className={styles.counterimage}
                  src={CounterDec}
                  alt="decrease quantity"
                  title="decrease quantity"
                  width="40"
                  height="40"
                />
              )}
              {quantity > 1 && (
                <Image
                  src={CounterDec}
                  alt="decrease quantity"
                  title="decrease quantity"
                  width="40"
                  height="40"
                  onClick={quantityDecrement}
                />
              )}
              <div className={styles.counternum}>
                <p>{quantity}</p>
              </div>
              <Image
                src={CounterInc}
                alt="increase quantity"
                title="increase quantity"
                width="40"
                height="40"
                onClick={quantityIncrement}
              />
            </div>
          </div>
          <div className={styles.price}>
            <h2>
              price: EGP <span>{drink.price * quantity}</span>
            </h2>
          </div>
          <button
            className={styles.rostobtn}
            onClick={() =>
              addToCart({
                id: drink.id,
                name: drink.name,
                imageUrl: drink.imageUrl,
                price: drink.price,
                quantity,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drinks;
