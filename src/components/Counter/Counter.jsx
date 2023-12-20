import React, {useState} from 'react';
import styles from './counter.module.css'
import { Link } from 'react-router-dom' 

const Counter = ({carrito, loaded, remove, clearCart}) => {
    
    const stock = 10;
    const [counter, setCounter] = useState(0);

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter - 1)
    }

  return (
    <div className={styles.contenedor}>
        <div className={styles.counter}>
            <button className={styles.btnCount} disabled={counter <= 0} onClick={restar}>-</button>
            <div>{counter}</div>
            <button className={styles.btnCount} disabled={counter >= stock} onClick={sumar}>+</button>
        </div>
        <div className={styles.addCarrito}>
            <button className={styles.btnCart} disabled={counter <= 0 || counter>stock} onClick={() => (carrito(counter))}>Agregar al carrito</button>
            <button className={styles.btnCart} onClick={loaded}>Is it already loaded?</button>
            <button className={styles.btnCart} onClick={remove}>Remove it</button>
            <button className={styles.btnCart} onClick={clearCart}>Clear Cart</button>
            <Link to='/cart' className={styles.btnCart}>Ir al carrito</Link>
        </div>
    </div>
  )
}

export default Counter