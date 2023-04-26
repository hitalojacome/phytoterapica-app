import styles from '../CSS/Menu.module.css'

function Menu() {
    return(
        <nav className={styles.menu}>
            <ul className={styles.menu1}>
                <li className={styles.menuItem}>OLÉOS ESSENCIAIS</li>
                <li className={styles.menuItem}>ÓLEOS VEGETAIS</li>
                <li className={styles.menuItem}>SINERGIA</li>
                <li className={styles.menuItem}>COSMÉTICOS NATURAIS</li>
                <li className={styles.menuItem}>HIGIENE PESSOAL</li>
                <li className={styles.menuItem}>AROMATIZADORES</li>
                <li className={styles.menuItem}>SUPLEMENTOS</li>
                <li className={styles.menuItem}>ACESSÓRIOS</li>
                <li className={styles.menuItem}>OFERTAS</li>
                <li className={styles.menuItem}>CONSULTOR(A)</li>
            </ul>
        </nav>
    );
}

export default Menu