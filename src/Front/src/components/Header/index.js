import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
   
    return(
        <div class="container">
        <nav>
            <ul>
                <img alt="novob" src="../assets/img/MIDALL NOVOb.png" class="imagem" />
                <li><Link to="/clip">Clipping de Email</Link></li>
                <li><Link to="/gerencassoc">Gerenciar Associados</Link></li>
                <li><Link to="/cadassoc">Cadastrar Associados</Link></li>
                <li><Link to="/rela">Relatorios</Link></li>
                <img alt="lnovob" src="../assets/img/MIDALL NOVOb.png" class="imagem1" />
            </ul>
        </nav>
    </div>
    )
};
export default Header