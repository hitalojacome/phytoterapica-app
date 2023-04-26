import styles from '../CSS/Introducao.module.css';

function Introducao() {
    return(
        <section className={styles.introducao}>
            <div className={styles.descricao}>
                <h1>Óleos Essenciais</h1>
                <p>Óleos essenciais são compostos naturais extraídos da parte aromática das plantas, como folhas, flores, galhos, troncos, raízes e casca de frutos.</p>
            </div>
        </section>
    );
}

export default Introducao 