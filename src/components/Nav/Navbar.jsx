import React from 'react'
import styles from './nav.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.link} href="http://google.com">Productos</a>
      <a className={styles.link} href="http://google.com">Nosotros</a>
      <a className={styles.link} href="http://google.com">Contacto</a>
      <a className={styles.link} href="http://google.com">Carrito</a>
    </nav>
  )
}

export default Navbar