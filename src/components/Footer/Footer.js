import styles from './footer.module.css'
import {IoLogoInstagram} from 'react-icons/io'
import {PiTiktokLogoLight, PiTwitterLogoLight} from 'react-icons/pi'

const Footer = () => {
    return (
        <footer className={styles.contenedor}>
            <nav>
                <a className={styles.aFoot} href="https://www.instagram.com/"><IoLogoInstagram className={styles.icons}/></a>
                <a className={styles.aFoot} href="https://www.tiktok.com/es/"><PiTiktokLogoLight className={styles.icons}/></a>
                <a className={styles.aFoot} href="https://twitter.com/notifications"><PiTwitterLogoLight className={styles.icons}/></a>
            </nav>
            <div className={styles.brand}>Leandro Magnotti ®</div>
        </footer>
    )
};

export default Footer;