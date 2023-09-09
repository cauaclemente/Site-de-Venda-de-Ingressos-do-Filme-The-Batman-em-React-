import React from "react";
import './style.css'
import { Link} from "react-router-dom";
import Logo from '../../assets/bat1.jpg';

function Header() {
    

    return(
        <header>
            <img id="logo" src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none'}} to= '/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to= '/fotos'>
                    <li>Fotos</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to= '/comentarios'>
                    <li>Comentarios</li>
                    </Link>
                    <Link style={{ textDecoration: 'none'}} to= '/contatos'>
                    <li>Contatos</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;