import React from 'react'
import Item from '../Item/Item'
import styles from './itemList.module.css'
import { Link } from 'react-router-dom'

const ItemList = ({items}) => {

  return (
    <div>
        {items && items.map((item)=> {
        return (
          <div className={styles.divMap} key={item.id}>
            <Link to={`/detail/:${item.id}`}>
            <Item fabricante={item.fabricante} marca={item.marca} modelo={item.modelo} memoria={item.memoria} precio={item.precio} img={item.img}/>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default ItemList