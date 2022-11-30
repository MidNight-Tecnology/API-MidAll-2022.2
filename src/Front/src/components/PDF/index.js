import React from "react";
import "../PDF/css.css";
import "../PDF/reset.css";

function PDF({link}) {
  return (
    <section id="PDF">
      <div id="Leitor">
        <iframe
          src={link}
          title="PDF do Diario Oficial"/>
        <div className="bot">
          <button>Download</button>
        </div>
      </div>
    </section>
  );
}

export default PDF;
