import React from 'react'
import styles from './../Style/ourteam.module.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <ul className={styles.navbar}>
          <li className={styles.firstcomp}>
            <a href="#"> <CustomLink to="/Secretaries">Pricing</CustomLink></a>
          </li>
          <li>
            <a href="#">Heads</a>
          </li>
          <li>
            <a href="#">Core</a>
          </li>
          <li>
            <a href="#">Executives</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar