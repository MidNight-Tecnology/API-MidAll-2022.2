import React from "react";
import Header from "../../components/Header";
import Pdf from "../../pdf";

const Clipping = () => {
  return (
    <div className="container">
      <div class="container">
        <Header />
      </div>
      <section class="clipping_emails">
        <div class="coluna">
          <h1 class="gradient">Clipping de Email</h1>
          <div class="borda">
            <form action="/sistema/alt_email" method="post"></form>
            <table class="dados1">
              <tr class="gradient">
                <th> </th>
                <th>Nome</th>
              </tr>
              <label for="{{id}}">
                <div class="dados">
                  <tr>
                    <td>
                    <div class="align_buts">
                    <Pdf />
                    </div>
                    </td>
                    <div class="nome_as"><td><p></p></td></div>
                  </tr>
                </div>
              </label>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clipping;
