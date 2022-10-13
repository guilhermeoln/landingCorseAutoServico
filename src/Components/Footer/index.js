import "./footer.css";
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

export default function Footer(){
    return(
        <div className="containerFooter">
            <div className="conteudoFooter">
                <img src="https://i.postimg.cc/W3Txr7kP/logo.png" alt="logo-footer" className="logoFooter"/>
                <div className="navFooter">
                    <a href="#home">Home</a>
                    <a href="#about">Sobre a Coser</a>
                    <a href="#services">Serviços</a>
                    <a href="#contact">Contato</a>
                    <a href="#contact">Coser Select</a>
                </div>
                <img src="https://i.postimg.cc/1zDQdBvC/Divider.png" alt="divisao" className="divisaoFooter"/>
                <div className="containerSocialMediasFooter">
                    <div className="conteudoSocialMedia">
                        <FaInstagram className="iconFooter"/>
                        <FaFacebookF className="iconFooter"/>
                    </div>
                    <div className="conteudoInfoFooter">
                        <p>© 2021 Coser Auto Serviço. Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </div>
    );
}