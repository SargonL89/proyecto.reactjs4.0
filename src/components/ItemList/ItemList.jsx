import React from 'react'
import Item from '../Item/Item'
import styles from './itemList.module.css'

const ItemList = ({items}) => {

  return (
    <div>
        {items && items.map((item)=> {
        return (
          <div className={styles.divMap} key={item.id}>
            <Item fabricante={item.fabricante} marca={item.marca} modelo={item.modelo} memoria={item.memoria} precio={item.precio} img={item.img}/>
          </div>
        )
      })}
    </div>
  )
}

export default ItemList