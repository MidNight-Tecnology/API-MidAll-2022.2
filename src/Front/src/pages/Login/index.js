import React from "react";
import crud from "../../services/axios";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
const Login = () =>{
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => crud.get(`/getuseremail/${data.email}`) 
    .then(resp =>{
        console.log(resp);
        var emaill = resp.data.email;
        var senhaa = resp.data.senha;
        var email = data.email;
        var senha = data.senha;
        if (email == emaill && senha == senhaa){
        } else{
        };
    })
    .catch(error =>{
        console.log(error)
    })
    return (
    <div className="container">
        <section class="fundinho">
            <div class="info">
                <h1>MidAll</h1>
                <h3>__________________________</h3>
                <br></br>
                <h2>Bem-Vindo(a) de volta!</h2>
                <br></br>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input id="bo" type="text" placeholder="E-mail" name="email" {...register("email", { required: true })}></input>
                    {errors.email && <span>Email é Requisito Obrigatório</span>}
                    <br></br><br></br>
                    <input id="bo" type="password" placeholder="senha" name="senha"{...register("senha", { required: true })}></input>
                    {errors.senha && <span>Senha é Requisito Obrigatório</span>}
                    <br></br><br></br>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </section>
    </div>
    );
};

export default Login;