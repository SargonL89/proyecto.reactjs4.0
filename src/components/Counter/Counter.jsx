import React, {useState} from 'react';
import styles from './counter.module.css'

const Counter = () => {
    
    const stock = 10;
    const [counter, setCounter] = useState(0);
    const [products, setProducts] = useState(0);

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter - 1)
    }
    const carrito = () => {
        setProducts(products + counter)
    }

  return (
    <div className={styles.contenedor}>
        <div className={styles.counter}>
            <button className={styles.btnCount} disabled={counter <= 0} onClick={restar}>-</button>
            <div>{counter}</div>
            <button className={styles.btnCount} disabled={counter >= stock} onClick={sumar}>+</button>
        </div>
        <div className={styles.addCarrito}>
            <button className={styles.btnCart}disabled={counter <= 0 || counter>stock} onClick={carrito}>Agregar al carrito</button>
            <div>Productos en carrito: {products}</div>
        </div>
    </div>
  )
}

export default Counter