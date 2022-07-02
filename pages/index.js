import Head from "next/head";
import styles from "../styles/Home.module.css";
import Slider from "../components/Slider";
import SeparatorSlider from "../components/SeparatorSlider";
import Separator from "../components/SeparatorSlider";
import Deals from "../components/Deals";
import Pizza from "../components/Pizza";
import data from "../api/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Rosto - Italian Pizza & Pasta Restaurant</title>
        <meta
          name="description"
          content="Order the Italian pizza & Pasta from Rosto Egypt to find the best pizzas that suits your taste buds. Order with pizza delivery and enjoy the food!"
        />
        <meta
          name="keywords"
          content="Rosto - Italian Pizza & Pasta Restaurant"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <SeparatorSlider />
      <Deals />
      <Separator />
      <Pizza products={data} />
    </div>
  );
}
