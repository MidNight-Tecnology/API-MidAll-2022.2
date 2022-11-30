import React from "react";
import { Link } from "react-router-dom";
import "../HeaderSec/css.css";
import "../HeaderSec/reset.css";
import imglogo from "../../assets/img/MIDALL NOVOb.png"


function Header2() {
  return (
    <section id="HEADER">
      <div class="container">
        <nav>
          <ul>
            <div className="img">
              <img
                alt="novob"
                src={imglogo}
                class="imagem"
              />
            </div>
            <li>
              <Link to="/clip">Clipping de Email</Link>
            </li>
            <li>
              <Link to="/gerencassoc">Gerenciar Associados</Link>
            </li>
            <li>
              <Link to="/cadassoc">Cadastrar Associados</Link>
            </li>
            <div className="img1">
              <img
                alt="lnovob"
                src={imglogo}
                class="imagem1"
              />
            </div>
          </ul>
        </nav>
      </div>
    </section>
  );
}
export default Header2;
