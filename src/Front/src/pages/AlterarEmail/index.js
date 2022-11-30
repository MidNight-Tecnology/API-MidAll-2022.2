import React, { useState, useEffect } from "react";
import App from "../../components/Header/App";
import crud from "../../services/axios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import axios from 'axios';
import "../../assets/css/style.css";


// dfdf
const AlterarEmail = () => {
    const { id } = useParams();
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = data => crud.put(`/editemail/${id}`, {
        nome_assoc: data.nome_assoc,
        assunto: data.assunto,
        email: data.email,
    }) .then(resp =>{
        console.log(resp);
    })
    .catch(error =>{
        console.log(error)
    })



    const [ Email, setEmail ] = useState([]);
    const [ semNada, setSemNada ] = useState(false)
    useEffect(() =>{
      crud.get(`/getemail/${id}`)
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

    const [ UserEmail, setUserEmail ] = useState([]);
    useEffect(() =>{
      crud.get(`/getAssocName/${id}`)
      .then((response) =>{
        if(response.data){    
          setUserEmail(response.data)
          setSemNada(false)
        }
      })
      .catch((error) =>{
        console.log(error)
      })
    }, [])

    
    const [campos, setCampos] = useState({  // Variaveis que tem que mudar para cada usuario:
        nome: '',
        email: '',
        mensagem: ''
    });

    campos.nome=Email.nome_assoc
    campos.mensagem = Email.email
    campos.email = UserEmail.email

    function handleFormSubmit2(event){ 
        event.preventDefault(); 
        console.log(campos); 
        send(campos);
      }

    function handleInputChange(event){
        campos.mensagem = event.target.value;
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

    useEffect(() =>{
        crud.get(`/getemail/${id}`)
        .then((response) =>{
            setEmail(response.data)
            reset(response.data)
        })
        .catch((error) =>{
          console.log(error)
        })
      }, [])

      
    function mostrar(){
      console.log(campos)
    }
      
    return (
        <div class="container">
            <App />
            <section class="alterar_emails">
                <div class="column">
                    <div class="title">
                        <h1 class="gradient">Alterar email</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="inputs_alt">
                            <div class="nome_assoc">
                                <input type="text" placeholder="Nome do Associado..." name="nome_assoc"{...register("nome_assoc", { required: true })} />
                                {errors.nome_assoc && <span>Nome é Requisito Obrigatório</span>}

                            </div>
                            <div class="ass">
                                <input type="text" placeholder="Assunto do Email..." name="assunto" {...register("assunto", { required: true })}/>
                                {errors.assunto && <span>Nome é Requisito Obrigatório</span>}

                            </div>
                            <div class="descrit">
                                <textarea name="mensagem" id="mensagem" placeholder="Descrição do Email..."{...register("email", { required: true })} onChange={handleInputChange}></textarea>
                                {errors.email && <span>Nome é Requisito Obrigatório</span>}

                            </div>
                        </div>
                        <div class="align_buts">
                            <button onClick="voltar()">Apagar</button> 
                            <button type="reset">Limpar</button>
                            <button type="submit">Salvar</button>
                            <button onClick={handleFormSubmit2}>enviar </button> 

                        </div>  
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AlterarEmail;