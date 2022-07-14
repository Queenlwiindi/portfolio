import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "../styles/Home.module.css";

const LayOut = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default LayOut;
