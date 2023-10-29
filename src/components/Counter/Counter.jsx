import React, {useState} from 'react';

const Counter = () => {
    
    const stock = 50;
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
    <div>
        <div>Counter: {counter}</div>
        <button disabled={counter >= stock} onClick={sumar}>+</button>
        <button disabled={counter <= 0} onClick={restar}>-</button>
        <button disabled={counter <= 0} onClick={carrito}>Agregar al carrito</button>
        <div>Productos en carrito: {products}</div>
    </div>
  )
}

export default Counter