import styles from '../CSS/Footer.module.css'
import LogoFooter from '../assets/logo_menor.png'
import { BsInstagram as Insta } from 'react-icons/bs'
import { BsFacebook as Face } from 'react-icons/bs'
import { GrBlog as Blog } from 'react-icons/gr'
import { BsYoutube as Youtube } from 'react-icons/bs'
import { BsTwitter as Tt } from 'react-icons/bs'
import Pagamentos from '../assets/pagamentos.png'
import Protecao from '../assets/protecao.png'


function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.column2}>
                <h2>Pagamentos</h2>
                <hr />
                <img src={Pagamentos} alt='Formas de pagamentos diponiveis' />
            </div>
            <div className={styles.column1}>
                <img src={LogoFooter} alt="logo Phytoterápica" className={styles.logo} />
                <hr className={styles.hrVertical}/>
                <div className={styles.redes}>
                    <Insta />
                    <Face />
                    <Blog />
                    <Youtube />
                    <Tt />
                </div>
            </div>
            <div className={styles.column3}>
                <h2>Protegido por</h2>
                <hr />
                <img src={Protecao} alt='Softwares utilizados para proteção da plataforma' />
            </div>
        </footer>
    );
}

export default Footer