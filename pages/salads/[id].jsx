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
    props: { rostoData: data.salads.find((item) => item.id === params.id) },
  };
}
export async function getStaticPaths() {
  const paths = data.salads.map((item) => ({ params: { id: item.id } }));

  return {
    paths,
    fallback: true,
  };
}

const Salads = (props) => {
  const { addToCart } = useContext(RostoContext);
  const router = useRouter();
  const salad = props.rostoData;

  const [quantity, setQuantity] = useState(1);

  const quantityIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const quantityDecrement = () => {
    setQuantity((prevQuantity) => prevQuantity - 1);
  };

  if (router.isFallback || !salad) {
    return <p> loading...</p>;
  }

  return (
    <div className="container">
      <Head>
        <title>Rosto - {salad.name}</title>
      </Head>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <Image src={salad.imageUrl} alt="deal" width="500" height="258" />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productDescription}>
            <h2>{salad.name}</h2>
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
              price: EGP <span>{salad.price * quantity}</span>
            </h2>
          </div>
          <button
            className={styles.rostobtn}
            onClick={() =>
              addToCart({
                id: salad.id,
                name: salad.name,
                imageUrl: salad.imageUrl,
                price: salad.price,
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

export default Salads;
