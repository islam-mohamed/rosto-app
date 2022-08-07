import React, { useContext } from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import { RostoContext } from "../../context/rostoContext";
import { useRouter } from "next/router";
import Head from "next/head";

const Pasta = () => {
  const rostoData = useContext(RostoContext);
  const router = useRouter();
  const pasta = rostoData.pasta.find(
    (product) => product.id === router.query.id
  );

  // const [size, setSize] = useState(0);
  const [addIngredients, setAddIngredients] = useState({
    dI: 0,
    eC: 0,
    eG: 0,
    eT: 0,
  });
  const { dI, eC, eG, eT } = addIngredients;

  const [quantity, setQuantity] = useState(1);

  const handleChange = (event) => {
    const { checked, id } = event.target;

    if (id === "d-ingredient") {
      checked
        ? setAddIngredients((prvState) => ({ ...prvState, dI: 25.0 }))
        : setAddIngredients((prvState) => ({ ...prvState, dI: 0.0 }));
    }
    if (id === "e-cheese") {
      checked
        ? setAddIngredients((prvState) => ({ ...prvState, eC: 20.0 }))
        : setAddIngredients((prvState) => ({ ...prvState, eC: 0.0 }));
    }
    if (id === "e-garlic") {
      checked
        ? setAddIngredients((prvState) => ({ ...prvState, eG: 10.0 }))
        : setAddIngredients((prvState) => ({ ...prvState, eG: 0.0 }));
    }

    if (id === "e-tomato") {
      checked
        ? setAddIngredients((prvState) => ({ ...prvState, eT: 10.0 }))
        : setAddIngredients((prvState) => ({ ...prvState, eT: 0.0 }));
    }
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  if (!pasta) {
    return <p> loading</p>;
  }

  return (
    <div className="container">
      <Head>
        <title>Rosto - {pasta.name}</title>
      </Head>
      <div className={styles.product}>
        <div className={styles.productImage}>
          <Image src={pasta.imageUrl} alt="deal" width="500" height="500" />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productDescription}>
            <h2>{pasta.name}</h2>
            <p>{pasta.desc}</p>
          </div>

          <div className={styles.addIngredients}>
            <h2>Choose Additional Ingredients:</h2>
            <div className={styles.ingredients}>
              <label
                className={styles.checkBoxContainer}
                htmlFor="d-ingredient"
              >
                <input
                  type="checkbox"
                  id="d-ingredient"
                  onChange={handleChange}
                />
                <span className={styles.checkMark}></span>
                <span className={styles.checkBoxLabel}>
                  Double Ingredients ( <b>+ EGP 25.00</b> )
                </span>
              </label>
              <label className={styles.checkBoxContainer} htmlFor="e-cheese">
                <input type="checkbox" id="e-cheese" onChange={handleChange} />
                <span className={styles.checkMark}></span>
                <span className={styles.checkBoxLabel}>
                  Extra Cheese ( <b>+ EGP 20.00</b> )
                </span>
              </label>
              <label className={styles.checkBoxContainer} htmlFor="e-garlic">
                <input type="checkbox" id="e-garlic" onChange={handleChange} />
                <span className={styles.checkMark}></span>
                <span className={styles.checkBoxLabel}>
                  Extra Garlic Sauce ( <b>+ EGP 10.00</b> )
                </span>
              </label>
              <label className={styles.checkBoxContainer} htmlFor="e-tomato">
                <input type="checkbox" id="e-tomato" onChange={handleChange} />
                <span className={styles.checkMark}></span>
                <span className={styles.checkBoxLabel}>
                  Extra Tomato Sauce ( <b>+ EGP 10.00</b> )
                </span>
              </label>
            </div>
          </div>
          <div className={styles.quantity}>
            <h2>quantity:</h2>

            <input
              type="number"
              defaultValue={1}
              min={1}
              max={10}
              id="quantity"
              onChange={handleQuantity}
            ></input>
          </div>
          <div className={styles.price}>
            <h2>
              price: EGP{" "}
              <span>{(pasta.price + dI + eC + eG + eT) * quantity}</span>
            </h2>
          </div>
          <button className={styles.rostobtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Pasta;
