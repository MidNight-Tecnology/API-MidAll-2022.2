import React from "react";

const Login = () =>{
    return (
    <div className="container">
        <section class="fundinho">
            <div class="info">
                <h1>MidAll</h1>
                <h3>__________________________</h3>
                <br></br>
                <h2>Bem-Vindo(a) de volta!</h2>
                <br></br>
                <form action="sistema/logar" method="post">
                    <input id="bo" type="text" placeholder="E-mail" name="email"></input>
                    <br></br><br></br>
                    <input id="bo" type="password" placeholder="senha" name="senha"></input>
                    <br></br><br></br>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </section>
    </div>);
};

export default Login;