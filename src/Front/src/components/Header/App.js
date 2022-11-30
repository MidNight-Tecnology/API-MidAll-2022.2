import React from 'react'
import { useState } from 'react';
import {Link} from 'react-router-dom'
import "../Header/he.css";
import imglogo from "../../assets/img/MIDALL NOVOb.png"

function App(){
   const [active, setMode] = useState(false);
   const ToggleMode = () => {
    setMode (!active);
   }
    return(
        <div class='App'>
            <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}> 
                <div className='hamburguer hambuguerIcon'></div>
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className='list'>
                    <ul className='listItems'>
                    <div className="img">
                        <img alt="novob" src={imglogo} class="imagem"/></div>
                        <li><Link to="/clip">Clipping de Email</Link></li>
                        <li><Link to="/gerencassoc">Gerenciar Associados</Link></li>
                        <li><Link to="/cadassoc">Cadastrar Associados</Link></li>
                        <div className="img1">
                            <img alt="lnovob" src={imglogo} class="imagem1"/></div>
                    </ul>
                </div>
            </div>
        </div>
    )
};
export default App