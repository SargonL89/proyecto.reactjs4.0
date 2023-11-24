import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({items}) => {

    const [card, setCard] = useState([])
    const { idProd } = useParams()


    const idWithoutColons = idProd.substring(1)


    console.log('Valor de idProd sin los dos puntos:', idWithoutColons);
    console.log('Valor de idProd sin los dos puntos:', typeof idWithoutColons);
    // console.log('params in itdeco: ', idProd);
    // console.log('params in itdeco: ', typeof idProd);
    
    useEffect(()=> {    

        const filtered = items.filter((item)=> {
            return item.id === idWithoutColons
        })
        setCard(filtered);
        // console.log('idwithout: ', idWithoutColons)
        // console.log('idwithout: ', typeof idWithoutColons)
        // console.log('filtered: ', filtered)
        // console.log('filtered: ', typeof filtered)
    }, [idProd, items])

    return (
    <>
        <ItemDetail card={card}/>
    </>
  )
}

export default ItemDetailContainer










// const ItemDetailContainer = () => {
//     const [product, setProduct] = useState([])
  
//     useEffect(()=> {
//       const detail = new Promise((res, rej) => {
//         const filtered = products.filter((product)=> {
//           return product.title === 'Remera Iorio';
//         });
//         // setTimeout(()=> {
//           res(filtered)
//         // }, 2000);
//         // setTimeout(()=> {
//           rej('Ocurrió un error en la solicitud')
//         // }, 2000)
//       })
  
//       detail
//       .then(data => {
//         setProduct(data)
//       })
//       .catch(error => {
//         console.log('Se produjo un error: ', error)
//       })
//     }, [])
  
//     return (
//       <>
//         <ItemDetail product={product}/>
//       </>
//     )
//   }
  
//   // title={product.title} price={product.price} stock={product.stock} category={product.category} img={product.img}
  
//   export default ItemDetailContainer