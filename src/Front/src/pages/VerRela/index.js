import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import crud from "../../services/axios";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";
import "./sty.css";
import "../../assets/css/style.css";


const VerRela = () => {
  const { id } = useParams();
  const [Email, setEmail] = useState([]);
  const [semNada, setSemNada] = useState(false);
  useEffect(() => {
    crud
      .get(`/getemail/${id}`)
      .then((response) => {
        setEmail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div class="container">
      <Header />
      <section id="VERRELA">
        <div class="column">
          <div class="title">
            <h1 class="gradient">RELATÓRIO</h1>
          </div>
          <div className="borda">
            <div className="infosver">
              <p>
                Associado: <b>{Email.nome_assoc}</b>
              </p>
              <p>
                Data de Citação: <b>{Email.data}</b>
              </p>
              <p>
                Pagina: <b>{Email.pagina}</b>
              </p>
              <p>
                Caderno: <b>{Email.caderno}</b>
              </p>
              <p>
                Citação: <b>{Email.email}</b>
              </p>
            </div>
          </div>
          <div class="align_buts">
            <Link to="/rela">
              <button>Voltar</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default VerRela;
