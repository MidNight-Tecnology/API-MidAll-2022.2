import Axios from "axios";
import React,{ useState }from "react";
import Header from "../../components/Header";

const CadastroAssoc = () => {
    const [values,setValues] = useState([]);
    const pegar = (value) => {
        setValues (preValue => ({

            ...preValue,
            [value.target.name]: value.target.value,
        }))
    }
    
    const aa = () =>{
        const a = values
        console.log(a);
    }
    // const cadastrar = () =>{
    //     Axios.post(`http://localhost:4512/createassoc`, values)
    //     .then(resp =>{
    //         console.log(values);
    //         console.log("deu")
    //     })
    //     .catch(error =>{
    //         console.log(error)
    //     })

    const cadastrar = () =>{
        Axios.post(`http://localhost:4512/createassoc`,{
            nome: values.nome,
            endereco: values.endereco,
            comp: values.complemento,
            nasc: values.nasc,
            cep:values.cep,
            tel: values.tel,
            cpf: values.cpf,
            rg: values.rg,
            estado_cv: values.estado_cv,
            inst_ens: values.inst_ens,
            email: values.email, 
        
        }) .then(resp =>{
                    console.log(values);
                    console.log("deu")
                })
        .catch(error =>{
            console.log(error)
        })
    }
    return (
        <div className="container">
            <Header />
            <section class="cadastro_user">
                <div class="coluna">
                    <h1 class="gradient">Cadastrar Associados</h1>
                    <form>
                        <div class="td">
                            <div class="info">
                                <input onChange={pegar} type="text" placeholder="Nome" name="nome"/>
                                <br />
                                <input onChange={pegar} type="text" placeholder="Endereço" name="endereco"/>
                                <br />
                                <input onChange={pegar}type="text" placeholder="Complemento" name="comp"/>
                                <br />
                                <div class="info_lado">
                                    <input onChange={pegar} type="date" placeholder="Data de Nascimento" name="nasc"/>
                                    <img class="logo3" alt="logo3" src="../assets/img/logo3.jpg"></img>
                                    <input onChange={pegar} type="text" placeholder="CEP" name="cep"/>
                                </div>
                                <br />
                            </div>
                        </div>
                        <div class="info2">
                            <div class="itens-cadastro">
                                <input onChange={pegar} type="text" placeholder="Telefone" name="tel"/>
                                <input onChange={pegar} type="text" placeholder="CPF" name="cpf"/>
                                <input onChange={pegar} type="text" placeholder="RG" name="rg"/>
                            </div>
                            <div class="novas_infos">
                                <select onChange={pegar} name="estado_cv" id="estado_cv">
                                    <option value="Casado(a)">Casado(a)</option>
                                    <option value="Solteiro(a)">Solteiro(a)</option>
                                    <option value="Viúvo(a)">Viúvo(a)</option>
                                </select>
                                <img class="logo3" alt="logo3" src="../assets/img/logo3.jpg"></img>
                                <input onChange={pegar} type="text" name="inst_ens" placeholder="Instituição de Ensino"></input>
                            </div>
                            <div class="info_email">
                                <input onChange={pegar} type="text" placeholder="Email" name="email"/>
                            </div>
                            <div class="align_buts">
                                <button type="reset">Limpar</button>
                                <button type="submit" onClick={() => cadastrar()} >Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
};

export default CadastroAssoc;