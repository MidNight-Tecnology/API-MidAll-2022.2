import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import crud from "../../services/axios";
import { Link } from "react-router-dom";


const Clipping = () => {
  const [ Email, setEmail ] = useState([])
  useEffect(() =>{
    crud.get("/getemail")
    .then((response) =>{
      setEmail(response.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  }, [])
  return (
    <div className="container">
      <div class="container">
        <Header />
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
                            <button>vesualizar</button>
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

export default Clipping;

