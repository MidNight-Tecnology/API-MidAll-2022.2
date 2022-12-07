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
          <a href={link}><button download formTarget="_blank">Download</button></a>
        </div>
      </div>
    </section>
  );
}

export default PDF;
