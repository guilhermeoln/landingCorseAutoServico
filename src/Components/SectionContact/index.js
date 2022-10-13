import "./contact.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function SectionContact(){

    useEffect(() =>{
        Aos.init({ duration: 1000})
    },[])


    return(
        <div className="containerSectionContact">
            <div className="containerTextContact" data-aos="fade-right" id="contact">
                <div className="contentTitleContact">
                    <img src="https://i.postimg.cc/LskxkDft/supporticon.png" alt="titleContact" />
                    <h2>No que podemos te ajudar?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.
                    </p>
                </div>
                <div className="contentTextContact">
                    <div className="cardContact">
                        <img src="https://i.postimg.cc/sgxGy43V/icon-Phone.png" alt="logophone" />
                        <p>Rua Ângelo Preto, 238, Centro, Passo Fundo</p>
                    </div>
                    <div className="cardContact">
                        <img src="https://i.postimg.cc/sgxGy43V/icon-Phone.png" alt="logophone"/>
                        <p className="phoneContact">(54) 3311.481</p>
                    </div>
                </div>
            </div>
            <div className="containerFormContact" data-aos="fade-right">
                <div className="conteudoFormContact">
                    <div className="rowFormContact">
                        <div className="colFormContact">
                            <p>Nome</p>
                            <input type="text" />
                        </div>
                        <div className="colFormContact">
                            <p>Telefone com DDD</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="rowFormContact">
                        <div className="colFormContact">
                            <p>E-mail</p>
                            <input type="text" />
                        </div>
                        <div className="colFormContact">
                            <p>Cidade</p>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="rowFormContact">
                        <div className="colFormContact100">
                            <p>Mensagem</p>
                            <textarea></textarea>
                        </div>
                    </div>
                    <button className="btnEnviarMensagem">ENVIAR MENSAGEM</button>
                </div>
            </div>
        </div>
    );
}