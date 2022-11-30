import React, { useContext } from "react";
import crud from "../../services/axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login } = useContext(AuthContext);

  const onSubmit = (data) => {
    crud
      .post("/getuseremail", {
        email: data.email,
        senha: data.senha,
      })
      .then((resp) => {
        if (resp) {
          console.log(resp.data.email, resp.data.senha);
          login(resp.data.email, resp.data.senha);
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
            <input
              id="bo"
              type="text"
              placeholder="E-mail"
              name="email"
              {...register("email", { required: true })}
            ></input>
            {errors.email && <span>Email é Requisito Obrigatório</span>}
            <br></br>
            <br></br>
            <input
              id="bo"
              type="password"
              placeholder="senha"
              name="senha"
              {...register("senha", { required: true })}
            ></input>
            {errors.senha && <span>Senha é Requisito Obrigatório</span>}
            <br></br>
            <br></br>
            <button type="submit">Entrar</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
