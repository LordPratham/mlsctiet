import React from 'react'
import Card from './Card'
import styles from "./../Style/ourteam.module.css";
const Core = () => {
  return (
    <div className={styles.wrapper}>
    <Card
      img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810454/9_zuzct1.png"
      title="Aryan Garg"
    />

    <Card
      img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810525/42_hau5ba.png"
      title="Aditya Pathak"
    />

    <Card
      img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810477/21_lubcch.png"
      title="Ikshan"
    />
    <Card
      img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810454/9_zuzct1.png"
      title="Aryan Garg"
    />

    <Card
      img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810525/42_hau5ba.png"
      title="Aditya Pathak"
    />

    <Card
      img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810477/21_lubcch.png"
      title="Ikshan"
    />
  </div>
  )
}

export default Core