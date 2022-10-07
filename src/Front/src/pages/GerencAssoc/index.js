import React from "react";
import Header from "../../components/Header";

const GerencAssoc = () => {
  return (
    <div className="container">
      <div class="container">
        <Header />
      </div>
      <section className="Gerenciar_Associados">
        <div className="coluna">
          <h1 className="gradient">Gerenciar Associado</h1>
          <div className="borda">
            <table class="dados1">
              <tr className="gradient">
                <th> </th>
                <th>Nome</th>
                <th>Telefone</th>
                <th>Email</th>
                <th>Instituição</th>
                <th> </th>
              </tr>
                    <tr>
                      <td>
                        <input type="hidden" name="id" value="{{id}}"></input>
                      </td>
                      <td>
                        <div class="nome_assoc">
                          <p>Ryan astolfo da silva roger</p>
                        </div>
                      </td>
                      <td>
                        <div class="desc">
                          <p>12997974215</p>
                        </div>
                      </td>
                      <td>
                        <div class="ema">
                          <p>rogerzinryan@gmail.com</p>
                        </div>
                      </td>
                      <td>
                        <div class="inst">
                          <p>fatec</p>
                        </div>
                      </td>
                      <div className="align_buts">
                        <td>
                          <a href="/sistema/gerenc_associ/{{id}}">
                            <button type="submit">Alterar</button>
                          </a>
                        </td>
                      </div>
                    </tr>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GerencAssoc;
