import React, { useState, useEffect } from "react";
import App from "../../components/Header/App";
import crud from "../../services/axios";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";



const Clipping = () => {
  const [ Email, setEmail ] = useState([]);
  const [ semNada, setSemNada ] = useState(false)
  useEffect(() =>{
    crud.get("/getemail")
    .then((response) =>{
      if(response.data){
        setEmail(response.data)
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
        <App />
      </div>
      <section className="clipping_emails">
        <div className="coluna">
          <h1 className="gradient">Clipping de Email</h1>
          <div className="borda">
            <table class="dados1">
              <tr className="gradient">
                <th>Sem Informações de Email</th>
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
          <App />
        </div>
        <section className="clipping_emails">
          <div className="coluna">
            <h1 className="gradient">Clipping de Email</h1>
            <div className="borda">
              <table class="dados1">
                <tr className="gradient">
                  <th>Nome</th>
                  <th> </th>
                </tr>
                {Email.map((Email, key) => {
                    return (
                            <tr key={key}>
                              <td>
                                <div class="nome_as">
                                  <p>{Email.nome_assoc}</p>
                                </div>
                              </td>
                              <div class="align_buts">
                                <td>
                                  <Link to={{ pathname: `/alteremail/${Email.id}` }}>
                                  <button className="butt">visualizar</button>
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
export default Clipping;

