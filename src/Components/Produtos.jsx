import styles from '../CSS/Produtos.module.css'

function Produtos({ foto, nome, valor, parcelas }) {
    return(
        <section className={styles.produtos}>
            <img src={foto} alt='Imagem do produto' />
            <h2>Oléo Essencial de {nome} - 10ml</h2>
            <span>{valor}</span>
            <p>(ou até 3x de R${parcelas} sem juros)</p>
        </section>
    )
}

export default Produtos