import React from 'react'
import styles from './../Style/ourteam.module.css'
const Card = (props) => {
  
    return (
        <div className={styles.card}>
          <div className={styles.card__body}>
            <img src={props.img} className={styles.card__image} />
            <h2 className={styles.card__title}>{props.title}</h2>
          </div>
          <button className={styles.card__btn}>Linkdin</button>
        </div>
      );
}

export default Card