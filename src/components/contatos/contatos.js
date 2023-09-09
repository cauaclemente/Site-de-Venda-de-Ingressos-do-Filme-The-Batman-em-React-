import React from "react";
import './contatos.css';
import Header from "../header/header";
import {FaLinkedin, FaGithub, FaInstagram} from 'react-icons/fa'


function Contatos(){
    
    const estiloDoIcone = {
        color: "white"
    };

    return(
        <>
        <Header />
        <div className="contacts-container">
             <div className="titulo-contacts">
                <h1 className="texto">Siga nossas <br /> redes sociais</h1>
            </div>
        </div>
        <div className="wrapper">
            <div className="button-contacts">
                <div className="icon">
            <a href="https://github.com/cauaclemente" target="_blank" rel="noopener noreferrer">
                <FaGithub style={estiloDoIcone}  />
            </a>
        </div>
            <span>GitHub</span>
        </div>
        <div className="button-contacts">
                <div className="icon">
            <a href="https://www.linkedin.com/in/cau%C3%A3-clemente-3b59291a0/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={estiloDoIcone} />
            </a>
        </div>
            <span>Linkedin</span>
        </div>
            <div class="button-contacts">
                <div class="icon">
                    <a href="https://www.instagram.com/caua_clemente/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram style={estiloDoIcone} />
                        </a>    
                    </div>
                <span>Instagram</span>
            </div>
        </div>
    
        </>
    )
}

export default Contatos;