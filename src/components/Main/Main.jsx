import React, {useEffect, useState} from 'react';
import styles from './main.module.css';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailConteiner/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom'

const Main = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch('https://64b93c8879b7c9def6c0ca35.mockapi.io/graphicCards')
        .then(Response => Response.json())
        .then(data => {
          setItems(data);
        })
        }
      catch (error) {
        console.error('Ha ocurrido un error en la solicitud: ', error)
      }
    }
    fetchData();
  }, []);

  return (
    <main className={styles.contenedor}>
      <Routes>
        <Route path='/' element={<ItemList items={items}/>} />
        <Route path='/detail/:idProd' element={<ItemDetailContainer items={items}/>} />
      </Routes>
    </main>
  )
}

export default Main