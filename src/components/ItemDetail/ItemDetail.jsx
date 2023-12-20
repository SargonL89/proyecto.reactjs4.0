import React, { useContext } from 'react'
import styles from './itemdetail.module.css'
import Counter from '../Counter/Counter'
import { CartContext } from '../../context/CartContext.jsx'

const ItemDetail = ({card}) => {
  const { cart, addCart, loadedCard, removeCard, clearCart } = useContext(CartContext);
  // const [products, setProducts] = useState(0);

  if (card.length === 0) {
    return <p>Cargando... </p>;
  };

  const carrito = (cantidad) => {
    addCart(card[0], cantidad)
    // setProducts(products + cantidad)
  };

  const loaded = () => {
      loadedCard(card[0])
  };

  const remove = () => {
    removeCard(card[0])
  };
  
  console.log('cart: ', cart);

  return (
    <div className={styles.divItDetail}>
        <img src={card[0].img} alt="placa de video" className={styles.imgItDetail}/>
        <div className={styles.details}>
            <ul className={styles.ulItDetail}>Fabricante: {card[0].fabricante}</ul>
            <ul className={styles.ulItDetail}>Marca: {card[0].marca}</ul>
            <ul className={styles.ulItDetail}>Modelo: {card[0].modelo}</ul>
            <ul className={styles.ulItDetail}>Memoria: {card[0].memoria}</ul>
            <ul className={styles.ulItDetail}>Precio: US$ {card[0].precio}</ul>
            <Counter carrito={carrito} loaded={loaded} remove={remove} clearCart={clearCart}/>
            {/* <button onClick={()=>addCart(products)}>Add Carrito</button> */}
            {/* <div>Productos en carrito: {products}</div> */}
        </div>
    </div>
  )
}

export default ItemDetail