import React from "react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Axios from 'axios'; 

const validationPost = yup.object().shape({
    nome: yup.string().required("Insira um nome"),
    endereco: yup.string().required("Insira um endereço"),
    comp: yup.string().required("Insira um complemento"),
    nasc: yup.date().required("Insira uma data de nascimento"),
    cep: yup.string().required("Insira um CEP"),
    tel: yup.string().required("Insira um telefone"),
    cpf: yup.string().required("Insira um cpf"),
    rg: yup.string().required("Insira um rg"),
    estado_cv: yup.string().required("Insira um Estado Civil"),
    inst_ens: yup.string().required("Insira uma Instituição de Ensino"),
    email: yup.string().required("Insira um Email"),
}).required();

const CadastroAssoc = () => {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationPost)
    });
    const addpost =  data => console.log(data, "Gui")
    return (
        <div classNameName="container">
            <Header />
            <section classNameName="cadastro_user">
                <div className="coluna">
                    <h1 className="gradient">Cadastrar Associados</h1>
                    <form onSubmit={handleSubmit(addpost)}>
                        <div className="td">
                            <div className="info">
                                <input type="text" placeholder="Nome" name="nome" {...register("nome")}/>
                                <p className="error-message">{errors.nome?.message}</p>
                                <br />
                                <input type="text" placeholder="Endereço" name="endereco" {...register("endereco")} />
                                <p className="error-message">{errors.endereco?.message}</p>
                                <br />
                                <input type="text" placeholder="Complemento" name="comp" {...register("comp")} />
                                <p className="error-message">{errors.comp?.message}</p>
                                <br />
                                <div className="info_lado">
                                    <input type="date" placeholder="Data de Nascimento" name="nasc" {...register("nasc")} />
                                    <p className="error-message">{errors.nasc?.message}</p>
                                    <img className="logo3" alt="logo3" src="../assets/img/logo3.jpg"></img>
                                    <input type="text" placeholder="CEP" name="cep" {...register("cep")} />
                                    <p className="error-message">{errors.cep?.message}</p>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div className="info2">
                            <div className="itens-cadastro">
                                <input type="text" placeholder="Telefone" name="tel" {...register("tel")} />
                                <p className="error-message">{errors.tel?.message}</p>
                                <input type="text" placeholder="CPF" name="cpf" {...register("cpf")} />
                                <p className="error-message">{errors.cpf?.message}</p>
                                <input type="text" placeholder="RG" name="rg" {...register("rg")} />
                                <p className="error-message">{errors.rg?.message}</p>
                            </div>
                            <div className="novas_infos">
                                <select name="estado_cv" id="estado_cv" {...register("estado_cv")}>
                                    <option value="Casado(a)">Casado(a)</option>
                                    <option value="Solteiro(a)">Solteiro(a)</option>
                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                </select>
                                <p className="error-message">{errors.estado_cv?.message}</p>
                                <img className="logo3" alt="logo3" src="../assets/img/logo3.jpg"></img>
                                <input type="text" name="inst_ens" placeholder="Instituição de Ensino" {...register("inst_ens")}></input>
                                <p className="error-message">{errors.inst_ens?.message}</p>
                            </div>
                            <div className="info_email">
                                <input type="text" placeholder="Email" name="email" {...register("email")} />
                                <p className="error-message">{errors.email?.message}</p>
                            </div>
                            <div className="align_buts">
                                <button type="reset">Limpar</button>
                                <button type="submit">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
};

export default CadastroAssoc;