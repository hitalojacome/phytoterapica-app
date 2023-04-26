import styles from '../CSS/Diferencial.module.css'
import Vegano from '../assets/vegano-icon.svg'
import Pata from '../assets/pata-icon.svg'
import Gotas from '../assets/gotas-icon.svg'

function Diferencial() {
    return(
        <section className={styles.diferencial}>
            <div className={styles.vantagem}>
                <div className={styles.vegan}>
                    <Vegano /><div className={styles.texto}>
                        <h2>Vegano</h2>
                        <p>sem componentes de origem animal</p>
                    </div>
                </div>
                <div className={styles.animal}>
                    <Pata /><div className={styles.texto}>
                        <h2>Cruelty-Free</h2>
                        <p>não testado em animais</p>
                    </div>
                </div>
                <div className={styles.puro}>
                    <Gotas /><div className={styles.texto}>
                        <h2>100% Puro</h2>
                        <p>óleos puros e naturais</p>
                    </div>
                    </div>
            </div>
        </section>
    );
}

export default Diferencial