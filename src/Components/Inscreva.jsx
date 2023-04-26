import styles from '../CSS/Inscreva.module.css'

function Inscreva() {
    return(
        <section className={styles.inscreva}>
            <div className={styles.textos}>
                <h2>INSCREVA-SE</h2>
                <p>E RECEBA NOVIDADES E PROMOÇÕES</p>
            </div>
            <input type='email' placeholder='Seu e-mail:' className={styles.ebox} />
            <button className={styles.News}>ASSINAR NEWSLETTER</button>
        </section>
    )
}

export default Inscreva