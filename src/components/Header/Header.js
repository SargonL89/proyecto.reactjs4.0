import Navbar from '../Nav/Navbar';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.contenedor}>
            <p>Prototype EC4.0</p>
            <Navbar />
        </header>
    )
}

export default Header;
