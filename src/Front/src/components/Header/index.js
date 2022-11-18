import React from 'react'
import {Link} from 'react-router-dom'
import "../../assets/css/style.css";
import imglogo from "../../assets/img/MIDALL NOVOb.png"

function Header(){
   
    return(
        <div class="container">
        <nav>
            <ul>
                <img alt="novob" src={imglogo} class="imagem" />
                <li><Link to="/clip">Clipping de Email</Link></li>
                <li><Link to="/gerencassoc">Gerenciar Associados</Link></li>
                <li><Link to="/cadassoc">Cadastrar Associados</Link></li>
                <li><Link to="/rela">Relatorios</Link></li>
                <img alt="lnovob" src={imglogo} class="imagem1" />
            </ul>
        </nav>
    </div>
    )
};
export default Header