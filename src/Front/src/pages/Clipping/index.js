import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import Pdf from "../../components/Modal";
import crud from "../../services/axios";

const Clipping = () => {
  const [ Emails, setEmails ] = useState([])
  useEffect(() =>{
    crud.get("/getpdf")
    .then((response) =>{
      setEmails(response.data)
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
            <form action="/sistema/alt_email" method="post"></form>
            <table class="dados1">
              <tr class="gradient">
                <th> </th>
                <th>Nome</th>
              </tr>
                <div class="dados">
                {Emails.map((email, key) =>{
                    return(
                      <tr key={key}>
                        <td>
                        <div class="align_buts">
                        <Pdf />
                        </div>
                        </td>
                        <div class="nome_as"><td><p>sdsds </p></td></div>
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
