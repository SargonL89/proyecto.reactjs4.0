import React from 'react'

const ItemDetail = ({card}) => {

  // console.log('in itemdetail: ', card)

  if (card.length === 0) {
    return <p>Cargando... </p>;
  }

  return (
    <div>
        <img src={card[0].img} alt="placa de video"/>
        <div>
            <ul>Fabricante: {card[0].fabricante}</ul>
            <ul>Marca: {card[0].marca}</ul>
            <ul>Modelo: {card[0].modelo}</ul>
            <ul>Memoria: {card[0].memoria}</ul>
            <ul>Precio: US$ {card[0].precio}</ul>
        </div>
    </div>
  )
}

export default ItemDetail