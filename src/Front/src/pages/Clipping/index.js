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
      <section class="clipping_emails">
        <div class="coluna">
          <h1 class="gradient">Clipping de Email</h1>
          <div class="borda">
            <form method="post"></form>
            <table class="dados1">
              <tr class="gradient">
                <th>Nome</th>
                <th></th>
              </tr>
              <div class="dados">
              {Email.map((Email, key) => {
              return (
                      <tr key={key}>
                        <td>
                        <div class="nome_as"><td><p>{Email.nome_assoc}</p></td></div>
                        </td>
                        <td>
                        <div class="align_buts">
                        <Link to={{ pathname: `/alteremail/${Email.id}` }}>
                          <button>ver</button>
                        </Link>
                        </div>
                        </td>
                      </tr>
                )
              })}
              </div>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clipping;
