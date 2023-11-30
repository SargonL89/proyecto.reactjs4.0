import React, { useState } from 'react'
import styles from './itemdetail.module.css'
import Counter from '../Counter/Counter'

const ItemDetail = ({card}) => {

  const [products, setProducts] = useState(0);

  const carrito = (cantidad) => {
    setProducts(products + cantidad)
  }
  
  if (card.length === 0) {
    return <p>Cargando... </p>;
  }

  return (
    <div className={styles.divItDetail}>
        <img src={card[0].img} alt="placa de video" className={styles.imgItDetail}/>
        <div className={styles.details}>
            <ul className={styles.ulItDetail}>Fabricante: {card[0].fabricante}</ul>
            <ul className={styles.ulItDetail}>Marca: {card[0].marca}</ul>
            <ul className={styles.ulItDetail}>Modelo: {card[0].modelo}</ul>
            <ul className={styles.ulItDetail}>Memoria: {card[0].memoria}</ul>
            <ul className={styles.ulItDetail}>Precio: US$ {card[0].precio}</ul>
            <Counter carrito={carrito}/>
            <div>Productos en carrito: {products}</div>
        </div>
        
    </div>
  )
}

export default ItemDetail