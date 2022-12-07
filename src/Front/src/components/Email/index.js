import "../Email/css.css";
import "../Email/reset.css";
import axios from 'axios';
import React, { useState, useEffect } from "react";
import crud from "../../services/axios";
import "../../assets/css/style.css";


function Email({email, um, assoc}) {

  
  const [campos, setCampos] = useState({  // Variaveis que tem que mudar para cada usuario:
      nome: '',
      email: '',
      mensagem: ''
  });

  campos.nome=assoc
  campos.mensagem = email
  campos.email = um.email

  function handleFormSubmit2(event){ 
      event.preventDefault(); 
      console.log(campos, "Clicked"); 
      send(campos);
    }

  function handleInputChange(event){
      campos.mensagem = event.target.value;
      email = event.target.value;
      setCampos(campos);
      // setEmail(campos);
    }

  function send(){
    console.log("chegou no 1")
      const formData = new FormData();
      Object.keys(campos).forEach(key => formData.append(key, campos[key]));
      axios.post('http://localhost:3030/send', 
                formData,
                {
                  headers: {
                   "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                  }
                })
        .then(response => { console.log(response.data);
    console.log("chegou no 2")
  }).catch(err => {
    console.log(err);
  })
    }

  return (
    <section id="EMAIL">
      <div className="all">
        <textarea className="txtarea" value={email} onChange={handleInputChange}/>
        <div className="bot">
          <button onClick={handleFormSubmit2}>Send</button>
        </div>
      </div>
    </section>
  );
}

export default Email;
