import React from "react";
import "../PDF/css.css";
import "../PDF/reset.css";

function PDF() {
  return (
    <section id="PDF">
      <div id="Leitor">
        <iframe
          src="http://diariooficial.imprensaoficial.com.br/doflash/prototipo/2022/Novembro/09/cidade/pdf/pg_0013.pdf"
          title="PDF do Diario Oficial"/>
        <div className="bot">
          <button>Download</button>
        </div>
      </div>
    </section>
  );
}

export default PDF;
