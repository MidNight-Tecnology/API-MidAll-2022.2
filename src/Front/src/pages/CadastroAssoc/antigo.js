import React,{ useState }from "react";
import Header from "../../components/Header";
import crud from "../../services/axios";
import { useForm } from "react-hook-form";


const CadastroAssoc = () => {
        const { register, handleSubmit, watch, formState: { errors } } = useForm();
        const onSubmit = data => crud.post("/criassoc", {
            nome: data.nome,
            endereco: data.endereco,
            comp: data.comp,
            nasc: data.nasc,
            cep: data.cep,
            tel: data.tel,
            cpf: data.cpf,
            rg: data.rg,
            estado_cv: data.estado_cv,
            inst_ens: data.inst_ens,
            email: data.email, 
        }) .then(resp =>{
            console.log(resp);
        })
        .catch(error =>{
            console.log(error)
        })

    
    return (
        <div className="container">
            <Header />
            <section class="cadastro_user">
                <div class="coluna">
                    <h1 class="gradient">Cadastrar Associados</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="td">
                            <div class="info">
                                <input type="text" placeholder="Nome" name="nome" {...register("nome", { required: true })}/>
                                {errors.nome && <span>Nome é Requisito Obrigatório</span>}
                                <br />
                                <input type="text" placeholder="Endereço" name="endereco" {...register("endereco", { required: true })}/>
                                {errors.endereco && <span>Endereço é Requisito Obrigatório</span>}
                                <br />
                                <input type="text" placeholder="Complemento" name="comp" {...register("comp")}/>
                                <br />
                                <div class="info_lado">
                                    <input type="date" placeholder="Data de Nascimento" name="nasc" {...register("nasc", { required: true })}/>
                                    {errors.nasc && <span>Nascimento é Requisito Obrigatório</span>}
                                    <img class="logo3" alt="logo3" src="../assets/img/logo3.jpg"></img>
                                    <input type="text" placeholder="CEP" name="cep" {...register("cep", { required: true })}/>
                                    {errors.cep && <span>CEP é Requisito Obrigatório</span>}
                                </div>
                                <br />
                            </div>
                        </div>
                        <div class="info2">
                            <div class="itens-cadastro">
                                <input type="text" placeholder="Telefone" name="tel" {...register("tel", { required: true })}/>
                                {errors.tel && <span>Telefone é Requisito Obrigatório</span>}
                                <input type="text" placeholder="CPF" name="cpf" {...register("cpf", { required: true })}/>
                                {errors.cpf && <span>CPF é Requisito Obrigatório</span>}
                                <input type="text" placeholder="RG" name="rg" {...register("rg", { required: true })}/>
                                {errors.rg && <span>RG é Requisito Obrigatório</span>}
                            </div>
                            <div class="novas_infos">
                                <select name="estado_cv" id="estado_cv" {...register("estado_cv", { required: true })}>
                                    <option value="Casado(a)">Casado(a)</option>
                                    <option value="Solteiro(a)">Solteiro(a)</option>
                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                </select>
                                {errors.estado_cv && <span>Estado Civil é Requisito Obrigatório</span>}
                                <img class="logo3" alt="logo3" src="../assets/img/logo3.jpg"></img>
                                <input type="text" name="inst_ens" placeholder="Instituição de Ensino" {...register("inst_ens", { required: true })}/>
                                {errors.inst_ens && <span>Instituição de Ensino é Requisito Obrigatório</span>}
                            </div>
                            <div class="info_email">
                                <input type="text" placeholder="Email" name="email" {...register("email", { required: true })}/>
                                {errors.email && <span>Email é Requisito Obrigatório</span>}
                            </div>
                            <div class="align_buts">
                                <button type="reset">Limpar</button>
                                <button type="submit" >Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
};

export default CadastroAssoc;