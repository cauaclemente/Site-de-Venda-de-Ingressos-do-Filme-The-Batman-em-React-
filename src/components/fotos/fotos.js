import React from "react";
import  './fotos.css';
import Header from "../header/header";


function Fotos(){
    return (
    <>
        <Header />
            <div class="fotos-pai">
            <div class="fotos-filho">
                <div className="card banner-1"></div>
                <div className="card banner-2"></div>
                <div className="card banner-3"></div>
                <div className="card banner-4"></div>
                <div className="card banner-5"></div>
                <div className="card banner-6"></div>

            </div>
        </div>
        
    </>
    )
}  

export default Fotos;