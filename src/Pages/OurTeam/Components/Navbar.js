import React from 'react'
import styles from './../Style/ourteam.module.css'
import { Link, useMatch, useResolvedPath, BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Secretaries from './Secretaries'
import Heads from './Heads'
import Core from './Core'
import Executives from './Executives'

const Navbar = () => {
  return (

    <Router>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.firstcomp}>
            <Link to="/Secretaries">Secretaries</Link>
          </li>
          <li>
            <Link to="/Heads">Heads</Link>
          </li>
          <li>
            <Link to="/Core">Core</Link>
          </li>
          <li>
            <Link to="/Executives">Executives</Link>
          </li>
        </ul>

      
      </nav>

      <Routes>
            <Route path="/Secretaries" element={<Secretaries />}/>
            <Route path="/Heads" element={<Heads />}/>
            <Route path="/Core" element={<Core />}/>
            <Route path="/Executives" element={<Executives />}/>

      </Routes> 
    </Router> 
  )
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
}

export default Navbar