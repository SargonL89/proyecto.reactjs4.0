import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({items}) => {

    const [card, setCard] = useState([])
    const { idProd } = useParams()

    const idCorrected = idProd.substring(1)

    useEffect(()=> {    
        const filtered = items.filter((item)=> {
            return item.id === idCorrected
        })
        setCard(filtered);
    }, [idCorrected, idProd, items])

    return (
    <>
        <ItemDetail card={card}/>
    </>
  )
}

export default ItemDetailContainer