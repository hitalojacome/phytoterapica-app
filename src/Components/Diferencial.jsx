import styles from '../CSS/Diferencial.module.css'
import Vegano from '../assets/vegano-icon.svg'
import Pata from '../assets/pata-icon.svg'
import Gotas from '../assets/gotas-icon.svg'

function Diferencial() {
    return(
        <section className={styles.diferencial}>
            <div className={styles.vantagem}>
                <div className={styles.vegan}>
                    <img src={Vegano} alt='Foto' className={styles.iconsV} />
                    <div className={styles.texto}>
                        <p><span>Vegano</span><br />sem componentes de origem animal</p>
                    </div>
                </div>
                <hr />
                <div className={styles.animal}>
                <img src={Pata} alt='Foto' className={styles.icons} />
                    <div className={styles.texto}>
                        <p><span>Cruelty-Free</span><br />não testado em animais</p>
                    </div>
                </div>
                <hr />
                <div className={styles.puro}>
                <img src={Gotas} alt='Foto' className={styles.icons} />
                    <div className={styles.texto}>
                        <p><span>100% Puro</span><br />óleos puros e naturais</p>
                    </div>
                    </div>
            </div>
        </section>
    );
}

export default Diferencial