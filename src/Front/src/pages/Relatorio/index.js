import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import crud from "../../services/axios";
import { Link } from "react-router-dom";

const Relatorio = () => {
  const [ Relatorio, setRelatorio ] = useState([])
  const [ semNada, setSemNada ] = useState(false)
  useEffect(() =>{
    crud.get("/getemail")
    .then((response) =>{
    if(response.data){
      setRelatorio(response.data)
      setSemNada(false)
    } else {
      setSemNada(true);
    }
    })
    .catch((error) =>{
      console.log(error)
    })
  }, [])
  if(semNada){
    return(
      <div className="container">
      <div class="container">
        <Header />
      </div>
      <section className="clipping_emails">
        <div className="coluna">
          <h1 className="gradient">Relatorios</h1>
          <div className="borda">
            <table class="dados1">
              <tr className="gradient">
                <th>Sem Informações de Relatorios</th>
                <th> </th>
              </tr>
              </table>
          </div>
        </div>
      </section>
    </div>
  );
  } else{
  return (
    <div className="container">
      <div class="container">
        <Header />
      </div>
      <section className="relatorio">
        <div className="coluna">
          <h1 className="gradient">Emissão de Relatório</h1>
          <div className="borda">
            <table class="dados1">
              <tr className="gradient">
                <th>Nome</th>
                <th> </th>
              </tr>
              {Relatorio.map((rela, key) => {
              return (
                      <tr key={key}>
                        <td>
                          <div class="nome_as">
                            <p>{rela.nome_assoc}</p>
                          </div>
                        </td>
                        <div class="align_buts">
                          <td>
                            <Link to={{ pathname: `/verrela/${rela.id}` }}>
                            <button>visualizar</button>
                            </Link>
                          </td>
                        </div>
                      </tr>
                )
              })}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
}
export default Relatorio;