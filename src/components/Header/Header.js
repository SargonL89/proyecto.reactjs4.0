import styles from './header.module.css'
import Cart from '../Cart/Cart';

const Header = () => {
    return (
        <header className={styles.contenedor}>
            <p>Prototype EC4.0</p>
            <nav className={styles.nav}>
                <a className={styles.link} href="http://google.com"><Cart /></a>
                <a className={styles.link} href="http://google.com">Productos</a>
                <a className={styles.link} href="http://google.com">Nosotros</a>
                <a className={styles.link} href="http://google.com">Contacto</a>

            </nav>
        </header>
    )
}

export default Header;
