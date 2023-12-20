import { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addCart = (card, cantidad) => {
      setCart([...cart, {...card, cantidad}])
    };

    const loadedCard = (card) => {
      const cardIn = cart.filter(id => card.id)
      if (cardIn.length > 0) {
        console.log('Esta tarjeta gráfica ya está en el carrito')
      } else {
        console.log('Esta tarjeta gráfica aún no está en el carrito')
      }
    };

    const removeCard = (card) => {
      const filteredCart = cart.filter(prod => prod.id !== card.id)
      setCart(filteredCart)
    };

    const clearCart = () => {
      setCart([]);
      console.log('Vaciaste el carrito')
    };

  return (
    <CartContext.Provider value={{cart, addCart, loadedCard, removeCard, clearCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider