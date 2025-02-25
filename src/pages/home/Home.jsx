import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import RowList from "../../components/row/rowList/RowList";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
}

export default Home;
