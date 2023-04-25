import styles from './Header.module.css'
import Logo from '../assets/logo.png'
import { AiOutlineUser  as User } from 'react-icons/ai';
import { CiPercent as Porcentagem } from 'react-icons/ci'
import { FiShoppingCart as Carrinho } from 'react-icons/fi'

function Header() {
    return(
        <header className={styles.header}>
            <img src={Logo} alt='logo Phytoterapica' className={styles.logo} />
            <div className={styles.headerInfo}>
                <input type='search' placeholder='O que você procura?'/>
                <div className={styles.desconto}>-5% NA PRIMEIRA COMPRA <Porcentagem className={styles.porcentagem} /></div>
                <div className={styles.icons}><User /><Carrinho /></div>
                <hr />
            </div>
        </header>
    );
}

export default Header