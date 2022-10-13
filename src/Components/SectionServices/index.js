import "./services.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


export default function SectionServices(){

    useEffect(() =>{
        Aos.init({ duration: 1000})
    },[])


    return(
        <div className="containerSectionServices">
            <div className="containerServicesCard" id="services" data-aos="fade-right">
                <div className="rowServicesCard">
                    <div className="cardServices">
                        <div className="titleCardServices">
                            <img src="https://i.postimg.cc/Mp2rQ8wv/Icon-1.png" alt="iconServices" />
                        </div>
                        <div className="textCardServices">
                            <h3>Balanceamento</h3>
                            <p>
                                At purus fames mauris, ornare mattis nec. 
                                Nulla ut lectus in ultrices rhoncus honcus nisl ultrices vestibulum.
                            </p>
                            <a href="">
                                SAIBA MAIS <img src="https://i.postimg.cc/kXWYMTHQ/Vector-6.png" alt="logo-btn" className="logoBtn"/>
                            </a>
                        </div>
                    </div>
                    <div className="cardServices">
                        <div className="titleCardServices">
                            <img src="https://i.postimg.cc/Z58qczMW/Icon-2.png" alt="iconServices" />
                        </div>
                        <div className="textCardServices">
                        <h3>Revisões</h3>
                            <p>
                                At purus fames mauris, ornare mattis nec. 
                                Nulla ut lectus in ultrices rhoncus honcus nisl ultrices vestibulum.
                            </p>
                            <a href="">
                                SAIBA MAIS <img src="https://i.postimg.cc/kXWYMTHQ/Vector-6.png" alt="logo-btn" className="logoBtn"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="rowServicesCard">
                <div className="cardServices">
                        <div className="titleCardServices">
                            <img src="https://i.postimg.cc/Mp2rQ8wv/Icon-1.png" alt="iconServices" />
                        </div>
                        <div className="textCardServices">
                            <h3>Rodas</h3>
                            <p>
                                At purus fames mauris, ornare mattis nec. 
                                Nulla ut lectus in ultrices rhoncus honcus nisl ultrices vestibulum.
                            </p>
                            <a href="">
                                SAIBA MAIS <img src="https://i.postimg.cc/kXWYMTHQ/Vector-6.png" alt="logo-btn" className="logoBtn"/>
                            </a>
                        </div>
                    </div>
                    <div className="cardServices">
                        <div className="titleCardServices">
                            <img src="https://i.postimg.cc/Z58qczMW/Icon-2.png" alt="iconServices" />
                        </div>
                        <div className="textCardServices">
                        <h3>Alinhamento 3D</h3>
                            <p>
                                At purus fames mauris, ornare mattis nec. 
                                Nulla ut lectus in ultrices rhoncus honcus nisl ultrices vestibulum.
                            </p>
                            <a href="">
                                SAIBA MAIS <img src="https://i.postimg.cc/kXWYMTHQ/Vector-6.png" alt="logo-btn" className="logoBtn"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerTextCard" data-aos="fade-right">
                <h2>Serviços especializados para o seu carro</h2>
                <p>
                    Viverra volutpat amet rhoncus urna, ullamcorper interdum non condimentum. Aliquet eget morbi urna a, at. 
                    Et consequat enim faucibus diam lectus ullamcorper est pharetra, sagittis. 
                    A varius cursus scelerisque ut. 
                    Amet.
                </p>
                <button>Fale com o Coser</button>
            </div>
        </div>
    );
}