import React from "react";
import Navbar from "./Components/Navbar";
import Graphics from "./Components/Graphics";
import styles from "./Style/ourteam.module.css";
import Card from "./Components/Card";
import img1 from "./Assets/image21.png"

const OurTeam = () => {
  return (
    <section className={styles.body}>
      <Graphics/> 
      <Navbar/>
      <div className={styles.wrapper}>
      <Card
        img="https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="The Everyday Salad"
      />

      <Card
        img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810525/42_hau5ba.png"
        title="Arpit Bhaiya"
      />

      <Card
        img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
        title="Baked Cod with Vegetables"
      />
    </div>
      <div className={styles.heading}>Our Team</div>
    </section>
  );
};

export default OurTeam;
