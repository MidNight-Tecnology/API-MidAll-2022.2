//IMPORTS
import React, { useState } from "react";
import Email from "../../components/Email";
import Header2 from "../../components/HeaderSec";
import PDF from "../../components/PDF";
import "../Clipping/alternativa.css";
import "../Clipping/reset.css";
import Hmb from "../Clipping/ios-menu.svg";
import xis from "../Clipping/md-close.svg";

//REACT
const EmailPdf = () => {
  const [active, setActive] = useState(true);

  const Aperta = () => {
    setActive(!active);
  };
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
        <PDF />
        <Email />
        {/* </div> */}
      </section>
    </>
  );
};

export default EmailPdf;
