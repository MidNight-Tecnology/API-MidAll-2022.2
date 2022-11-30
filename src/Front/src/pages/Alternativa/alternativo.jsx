//IMPORTS
import React, { useState } from "react";
import { useEffect } from "react";
import Email from "../../components/Email";
import Header2 from "../../components/HeaderSec";
import PDF from "../../components/PDF";
import "./alternativa.css";
import "./reset.css";
import Hmb from "./ios-menu.svg";
import xis from "./md-close.svg";
import crud from "../../services/axios";
import { useParams } from "react-router-dom";

//http://diariooficial.imprensaoficial.com.br/doflash/prototipo/2022/Novembro/09/cidade/pdf/pg_0013.pdf
//http://diariooficial.imprensaoficial.com.br/doflash/prototipo/{ano}/{mes}/{dia}/{caderno}/pdf/{pagina}.pdf
//REACT

const EmailPdf = () => {
  const [active, setActive] = useState(true);
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const { id } = useParams();
  const [carrega, setCarrega] = useState(false);
  useEffect(async () => {
    setCarrega(true);
    console.log(carrega);
    await crud.get(`/getemail/${id}`).then((response) => {
      setEmail(response.data);
      setCarrega(false);
      console.log(carrega);
      const meses = [
        "",
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ];
      const mes = meses[response.data.mes];
      const dia = response.data.dia;
      const ano = response.data.ano;
      const caderno = response.data.caderno;
      const pagina = response.data.pagina;
      console.log(dia, ano, mes);
      setLink(
        "http://diariooficial.imprensaoficial.com.br/doflash/prototipo/" +
          ano +
          "/" +
          mes +
          "/" +
          dia +
          "/" +
          caderno +
          "/pdf/pg_" +
          pagina +
          ".pdf"
      );
    });
  }, []);
  const [UserEmail, setUserEmail] = useState([]);
  useEffect(() => {
    crud
      .get(`/getAssocName/${id}`)
      .then((response) => {
        if (response.data) {
          setUserEmail(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const Aperta = () => {
    setActive(!active);
  };
  if (carrega) {
    return (
      <section>
        <div>
          <p>Carregando...</p>
        </div>
      </section>
    );
  } else if (!carrega) {
    return (
      <>
        <div id="mostrapraele" className={active ? "" : "left"}>
          <Header2 />
        </div>
        <section
          id="TELADEEMAILS"
          className={active ? "porcent80 right" : "percent100"}
        >
          <div className="um">
            <button className="btn right" onClick={Aperta}>
              <img src={active ? xis : Hmb} alt="Logo"></img>
            </button>
          </div>
          {/* <div className="um"> */}
          <PDF link={link} />
          <Email email={email.email} um={UserEmail} assoc={email.nome_assoc} />
          {/* </div> */}
        </section>
      </>
    );
  }
};

export default EmailPdf;
