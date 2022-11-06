import React, {useState} from 'react';
import axios from 'axios';

function App() {
  const [campos, setCampos] = useState({  // Variaveis que tem que mudar para cada usuario:
      nome: 'teste101',
      email: 'juliopm142@gmail.com',
      mensagem: 'teste101'
  });
  function handleInputChange(event){
    campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  function send(){
    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));
    axios.post('http://localhost:3030/send', 
              formData,
              {
                headers: {
                 "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
                }
              })
      .then(response => { console.log(response.data); })
  }

  function handleFormSubmit(event){ 
    event.preventDefault(); 
    console.log(campos); 
    send(campos);
  }



  return (
    <div className="container">
      <form onSubmit={handleFormSubmit}>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
