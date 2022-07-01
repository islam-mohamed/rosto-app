import React from "react";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";
import PizzaIcon from "./../../public/images/svg/pizza.svg";

const Product = () => {
  const [size, setSize] = useState(0);
  const [dI, setDI] = useState(0);
  const [eC, setEC] = useState(0);
  const [eG, setEG] = useState(0);
  const [eT, setET] = useState(0);
  const [quantity, setQuantity] = useState(1);

  console.log(dI, eC, eG, eT);

  const product = {
    id: "pizza01",
    imageUrl: "/../public/images/pizza-pp_01.png",
    name: "Hut Savers Stuffed Crust Offer",
    desc: "Ranch base sauce with grilled chicken pieces, topped with mushroom slices, onions, mixed with Mozzarella and topped with tasty BBQ sauce and chopped parsley.",
    price: [85, 111, 129],
  };

  const handleChangeDI = (event) => {
    event.target.checked & (event.target.id === "d-ingredient")
      ? setDI(25.0)
      : setDI(0);
  };
  const handleChangeEC = (event) => {
    event.target.checked & (event.target.id === "e-cheese")
      ? setEC(20.0)
      : setEC(0);
  };
  const handleChangeEG = (event) => {
    event.target.checked & (event.target.id === "e-garlic")
      ? setEG(10.0)
      : setEG(0);
  };
  const handleChangeET = (event) => {
    event.target.checked & (event.target.id === "e-tomato")
      ? setET(10.0)
      : setET(0);
  };
  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <div className="container">
      <div className={styles.product}>
        <div className={styles.productImage}>
          <Image src={product.imageUrl} alt="Pizza" width="500" height="500" />
        </div>
        <div className={styles.productContent}>
          <div className={styles.productDescription}>
            <h2>{product.name}</h2>
            <p>{product.desc}</p>
          </div>
          <div className={styles.productSize}>
            <h2>choose size:</h2>
            <div className={styles.sizeContainer}>
              <div className={styles.sizeImage} onClick={() => setSize(0)}>
                <Image src={PizzaIcon} alt="Pizza" width="40" height="40" />
                <p>s</p>
              </div>
              <div className={styles.sizeImage} onClick={() => setSize(1)}>
                <Image src={PizzaIcon} alt="Pizza" width="50" height="50" />
                <p>m</p>
              </div>
              <div className={styles.sizeImage} onClick={() => setSize(2)}>
                <Image src={PizzaIcon} alt="Pizza" width="60" height="60" />
                <p>l</p>
              </div>
            </div>
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
                  onChange={handleChangeDI}
                />
                <span className={styles.checkMark}></span>
                <span className={styles.checkBoxLabel}>
                  Double Ingredients ( <b>+ EGP 25.00</b> )
                </span>
              </label>
              <label className={styles.checkBoxContainer} htmlFor="e-cheese">
                <input
                  type="checkbox"
                  id="e-cheese"
                  onChange={handleChangeEC}
                />
                <span className={styles.checkMark}></span>
                <span className={styles.checkBoxLabel}>
                  Extra Cheese ( <b>+ EGP 20.00</b> )
                </span>
              </label>
              <label className={styles.checkBoxContainer} htmlFor="e-garlic">
                <input
                  type="checkbox"
                  id="e-garlic"
                  onChange={handleChangeEG}
                />
                <span className={styles.checkMark}></span>
                <span className={styles.checkBoxLabel}>
                  Extra Garlic Sauce ( <b>+ EGP 10.00</b> )
                </span>
              </label>
              <label className={styles.checkBoxContainer} htmlFor="e-tomato">
                <input
                  type="checkbox"
                  id="e-tomato"
                  onChange={handleChangeET}
                />
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
              <span>
                {(product.price[size] + dI + eC + eG + eT) * quantity}
              </span>
            </h2>
          </div>
          <button className={styles.rostobtn}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
