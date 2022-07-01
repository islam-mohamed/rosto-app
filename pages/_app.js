import Layout from "../components/Layout";
import "../styles/globals.css";
import Backdrop from "../components/Backdrop";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
