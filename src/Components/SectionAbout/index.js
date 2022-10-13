import "./about.css";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function SectionAbout(){

    useEffect(() =>{
        Aos.init({ duration: 1000})
    },[])


    return(
        <div className="containerSectionAbout" data-aos="fade-right">
            <div className="sectionAboutOne" id="about">
                <div className="conteudoImgAboutOne">
                    <img src="https://i.postimg.cc/0yrFH9tV/placeholder.jpg" alt="logo-about" />
                </div>
                <div className="conteudoTextAboutOne">
                    <h4>Conheça o</h4>
                    <h2>Coser Auto Serviço</h2>
                    <p>
                        Amet at semper sed sed orci sit sed. Congue et faucibus consectetur gravida bibendum. 
                        At lectus porttitor tincidunt parturient vitae purus lacus mi. 
                        Parturient facilisis pellentesque in velit elementum est nunc. 
                        Consequat dictumst vel sit blandit.
                    </p>
                    <p className="secondTextAbout">
                        Vestibulum mattis sem pretium consectetur. 
                        Lectus fermentum quam non nisl. 
                        Leo odio vitae in consequat, non convallis. 
                        Dui duis aliquam eget et nulla. Nibh nisl mauris, 
                        turpis porttitor neque, 
                        ultricies tincidunt turpis risus. 
                        Velit pellentesque varius enim, sem.
                    </p>
                    <div className="containerCardsAbout">
                        <div className="cardAbout">
                            <div className="titleCard">
                                <img src="https://i.postimg.cc/1RdWMX7X/star.png" alt="logoCard" />
                            </div>
                            <div className="textCard">
                                <h4>Excelência</h4>
                                <p>
                                    Lorem ipsum dolor sit amet 
                                    consectetur adipiscing elit
                                    sed do eiusmod tempor incididunt ut labore et.
                                </p>
                            </div>
                        </div>
                        <div className="cardAbout">
                            <div className="titleCard">
                                <img src="https://i.postimg.cc/HLHcg0nx/Vector-4.png" alt="logoCard" />
                            </div>
                            <div className="textCard">
                                <h4>Serviço especializado</h4>
                                <p>
                                    Lorem ipsum dolor sit amet 
                                    consectetur adipiscing elit 
                                    sed do eiusmod tempor incididunt ut labore et.
                                </p>
                            </div>
                        </div>
                        <div className="cardAbout">
                            <div className="titleCard">
                                <img src="https://i.postimg.cc/Bvq6yq7P/Vector-5.png" alt="logoCard" />
                            </div>
                            <div className="textCard">
                                <h4>Confiabilidade</h4>
                                <p>
                                    Lorem ipsum dolor sit amet
                                    consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sectionAboutTwo">
                <div className="conteudoTextAboutTwo">
                    <h4>Seu carro em boas mãos</h4>
                    <h2>Não se preocupe, nós cuidamos de tudo para você!</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <button>Chamar o Coser</button>
                </div>
                <div className="conteudoImgAboutTwo">
                    <img src="https://i.postimg.cc/NGdrhCWP/image.png" alt="img-about" />
                </div>
            </div>
        </div>
    );
}