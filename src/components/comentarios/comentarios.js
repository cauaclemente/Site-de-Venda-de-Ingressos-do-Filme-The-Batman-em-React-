import React from "react";
import './comentarios.css';
import Header from "../header/header";



function Comentarios(){
    return(
        <>
        <Header />
        <div id="banner1"></div>
    <div className="comentarios">
        <div className="forms">
            <li>Comentários</li>
            
            <div className="email">
        <label htmlFor="email">Email:</label>
        <input style={{ display: 'block' }} id="email" type="email" name="email" placeholder="insira um email válido" />
                </div>
                <div className="nome">
                <label for="name">Nome:</label>
                <input style={{display: 'block'}} id="name" type="name" name="name" placeholder="insira seu nome" />
            </div>    

            <div className="opiniao">
                <label for="text">Descreva sua opinião sobre a página:</label>
                <textarea style={{display: 'block'}} name="mensagem" id="mensagem" rows="10"></textarea>
            </div>

            <button className="button">Enviar</button>
        </div>
    </div>

   
        </>
    )
}

export default Comentarios;