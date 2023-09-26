import Navbar from '../Nav/Navbar';
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.contenedor}>
            <h3>Prototype EC4.0</h3>
            <Navbar />
        </header>
    )
}

export default Header;
