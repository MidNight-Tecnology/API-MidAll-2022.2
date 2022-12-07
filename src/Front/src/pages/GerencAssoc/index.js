import React, { useState, useEffect } from "react";
import App from "../../components/Header/App";
import crud from "../../services/axios";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/style.css";



const GerencAssoc = () => {
  const [ semNada, setSemNada ] = useState(false)
  const [ Assocs, setAssocs ] = useState([])
  useEffect(() =>{
    crud.get("/getassoc")
    .then((response) =>{
      if(response.data){
      setAssocs(response.data)
      setSemNada(false)
      } else {
        setSemNada(true)
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
        <App />
      </div>
      <section className="Gerenciar_Associados">
          <div className="coluna">
            <h1 className="gradient">Gerenciar Associado</h1>
            <div className="borda">
              <table class="dados1">
                <tr className="gradient">
                  <th> SEM INFORMAÇÕES DE ASSOCIADOS</th>
                  <th> </th>
                </tr>
                </table>
            </div>
          </div>
        </section>
      </div>
  );
  } else {
    return (
      <div className="container">
        <div class="container">
          <App />
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
                      {Assocs.map((assoc, key) => {

                        return (
                          <tr key={key}>
                        <td>
                          <p>{assoc.id}</p>
                        </td>
                        <td>
                          <div class="nome_assoc">
                            <p>{assoc.nome}</p>
                          </div>
                        </td>
                        <td>
                          <div class="desc">
                            <p>{assoc.tel}</p>
                          </div>
                        </td>
                        <td>
                          <div class="ema">
                            <p>{assoc.email}</p>
                          </div>
                        </td>
                        <td>
                          <div class="inst">
                            <p>{assoc.inst_ens}</p>
                          </div>
                        </td>
                        <div className="align_buts">
                          <td>
                            <Link to={{ pathname: `/alterassoc/${assoc.id}` }}>
                              <button className="butt" type="submit">Alterar</button>
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
export default GerencAssoc;
