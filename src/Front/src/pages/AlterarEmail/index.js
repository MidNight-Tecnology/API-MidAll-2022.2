import React from "react";
import Header from "../../components/Header";

const AlterarEmail = () => {
    return (

        <div class="container">
            <Header />
            <section class="alterar_emails">
                <div class="column">
                    <div class="title">
                        <h1 class="gradient">Alterar email</h1>
                    </div>
                    <form action="/sistema/altera_email" method="post">
                        <div class="inputs_alt">
                            <div class="nome_assoc">
                                <input type="text" placeholder="Nome do Associado..." />
                            </div>
                            <div class="ass">
                                <input type="text" placeholder="Assunto do Email..." />
                            </div>
                            <div class="descrit">
                                <textarea name="desc_em" id="desc_em" placeholder="Descrição do Email..."></textarea>
                            </div>
                        </div>
                        <div class="align_buts">
                            <button onclick="voltar()">Apagar</button> 
                            <button type="reset">Limpar</button>
                            <button type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AlterarEmail;