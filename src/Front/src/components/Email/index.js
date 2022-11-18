import React from "react";
import "../Email/css.css";
import "../Email/reset.css";

function Email() {
  return (
    <section id="EMAIL">
      <div className="all">
        <textarea className="txtarea"/>
        <div className="bot">
          <button>Send</button>
        </div>
      </div>
    </section>
  );
}

export default Email;
