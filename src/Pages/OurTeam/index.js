import React from "react";
import Navbar from "./Components/Navbar";
import Graphics from "./Components/Graphics";
import styles from "./Style/ourteam.module.css";
import Core from "./Components/Core";

const OurTeam = () => {
  return (
    <section className={styles.body}>
      <Graphics/>
      <Navbar/>
      <div className={styles.heading}>Our Team</div>
    </section>
  );
};

export default OurTeam;
