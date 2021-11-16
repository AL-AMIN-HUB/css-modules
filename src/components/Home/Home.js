import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <h2>This is Home</h2>
      <button className={styles.myButton}>Click Me</button>
    </div>
  );
};

export default Home;
