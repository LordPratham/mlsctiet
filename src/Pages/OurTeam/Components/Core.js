import React from 'react'
import Card from './Card'
import styles from "./../Style/ourteam.module.css";
const Core = () => {
  return (
    <div className={styles.wrapper}>
    <Card
      img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810454/9_zuzct1.png"
      title="Aryan"
    />

    <Card
      img="https://res.cloudinary.com/dcvqnyvvt/image/upload/v1655810525/42_hau5ba.png"
      title="Pathak"
    />

    <Card
      img="https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      title="Baked Cod with Vegetables"
    />
  </div>
  )
}

export default Core