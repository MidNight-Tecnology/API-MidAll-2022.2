import React from 'react'
import {Link} from 'react-router-dom'

function Header(){
   
    return(
        <div class="container">
        <nav>
            <ul>
                <img alt="novob" src="../assets/img/MIDALL NOVOb.png" class="imagem" />
                <li><Link to="/Clipping">Clipping de Email</Link></li>
                <li><Link to="/GerencAssoc">Gerenciar Associados</Link></li>
                <li><Link to="/CadAssoc">Cadastrar Associados</Link></li>
                <img alt="lnovob" src="../assets/img/MIDALL NOVOb.png" class="imagem1" />
            </ul>
        </nav>
    </div>
    )
};
export default Header