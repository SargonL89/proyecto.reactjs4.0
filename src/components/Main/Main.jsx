import React from 'react';
import styles from './main.module.css';
import Counter from '../Counter/Counter';

const Main = () => {
  return (
    <main className={styles.contenedor}>
        <section>
            Bienvenidos!
        </section>
        <div>
          <Counter />
        </div>
    </main>
  )
}

export default Main