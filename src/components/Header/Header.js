import styles from './header.module.css'
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className={styles.contenedor}>
            <Link to='/'>
                <p>Prototype EC4.0</p>
            </Link>
            <nav className={styles.nav}>
                <Link to='/cart' className={styles.link}><Cart /></Link>
                <Link to='/' className={styles.link}>Productos</Link>
                <a className={styles.link} href="http://google.com">Nosotros</a>
                <a className={styles.link} href="http://google.com">Contacto</a>
            </nav>
        </header>
    )
}

export default Header;
