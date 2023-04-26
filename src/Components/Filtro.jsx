import styles from '../CSS/Filtro.module.css'
import { VscSettings as Filtrar} from 'react-icons/vsc'
import { GoListUnordered as Ordem} from 'react-icons/go'

function Filtro () {
    return(
        <section className={styles.filtros}>
            <div className={styles.botoes}>
                <button className={styles.Filter}>FILTRAR <Filtrar /></button>
                <button className={styles.Ordenar}>ORDENAR POR <Ordem /></button>
            </div>
            <p>16 Produtos</p>
        </section>
    );
}

export default Filtro