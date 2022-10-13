import "./header.css";
import { AiOutlineMenu,  AiOutlineClose} from 'react-icons/ai'; 
import { useState, useContext } from 'react';
import MyContext from '../../contexts/myContext';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';


export default function Header(){


    const {
        menuSandwich,
        setMenuSandwich
    }   = useContext(MyContext)



    function exibirMenu(){
        setMenuSandwich(true);
    }

    function esconderMenu(){
        setMenuSandwich(false);
    }

    return(
        <header>
            <div className="containerLogoHeader">
                <img src="https://i.postimg.cc/W3Txr7kP/logo.png" alt="logo-header"/>
            </div>
            <nav>
                <a href="#home">Home</a>
                <a href="#about">Sobre a Coser</a>
                <a href="#services">Serviços</a>
                <a href="#contact">Contato</a>
            </nav>
            <div className="containerSocialHeader">
                <p>CoserSelect</p>
                <FaInstagram className="iconHeader"/>
                <FaFacebookF className="iconHeader"/>
            </div>
            <div className="containerBtnHeader">
                {menuSandwich 
                    ? 
                <AiOutlineClose className="iconMenuHeader" onClick={ esconderMenu}/> 
                    : 
                <AiOutlineMenu className="iconMenuHeader" onClick={ exibirMenu}/>}
            </div>
        </header>
    );
}