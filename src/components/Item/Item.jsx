import React from 'react'
import styles from './item.module.css'

const Item = ({fabricante, marca, modelo, memoria, precio, img}) => {

    return (
        <div className={styles.divItem}>
            <img className={styles.imgItem} src={img} alt="placa de video"/>
            <div>
                <ul className={styles.ulItem}>Fabricante: {fabricante}</ul>
                <ul className={styles.ulItem}>Marca: {marca}</ul>
                <ul className={styles.ulItem}>Modelo: {modelo}</ul>
                <ul className={styles.ulItem}>Memoria: {memoria}</ul>
                <ul className={styles.ulItem}>Precio: US$ {precio}</ul>
            </div>
        </div>
    )
}

export default Item