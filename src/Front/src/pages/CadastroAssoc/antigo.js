import React, { useState } from "react";
import App from "../../components/Header/App";
import crud from "../../services/axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/style.css";
import imglogo from "../../assets/img/logo3.jpg";
import Modal from "../../components/modal/modal";

const CadastroAssoc = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [cads, setCads] = useState(false)
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setCads(true)
    crud.post("/criassoc", {
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
    });
  };

  function Cad() {
    setModalOpen(true);
  }
  return (
    <>
      <Modal isOpen={modalOpen} setIsOpen={setModalOpen}>
        <div className="Modal">
          <div className="align_center">
            <div className="topo">
              <h3>Cadastro Concluido</h3>
              <hr></hr>
            </div>
            <p>Usuario Cadastrado com Sucesso</p>
            <div className="But_Align">
              <Link to="/clip">
                <button className="Button">Clipping</button>
              </Link>
            </div>
          </div>
        </div>
      </Modal>
      <div className="container">
        <App />
        <section class="cadastro_user">
          <div class="coluna">
            <h1 class="gradient">Cadastrar Associados</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="td">
                <div class="info">
                  <input
                    type="text"
                    placeholder="Nome"
                    name="nome"
                    {...register("nome", { required: true })}
                  />
                  {errors.nome && <span>Nome ?? Requisito Obrigat??rio</span>}
                  <br />
                  <input
                    type="text"
                    placeholder="Endere??o"
                    name="endereco"
                    {...register("endereco", { required: true })}
                  />
                  {errors.endereco && (
                    <span>Endere??o ?? Requisito Obrigat??rio</span>
                  )}
                  <br />
                  <input
                    type="text"
                    placeholder="Complemento"
                    name="comp"
                    {...register("comp")}
                  />
                  <br />
                  <div class="info_lado">
                    <input
                      type="date"
                      placeholder="Data de Nascimento"
                      name="nasc"
                      {...register("nasc", { required: true })}
                    />
                    {errors.nasc && (
                      <span>Nascimento ?? Requisito Obrigat??rio</span>
                    )}
                    <img class="logo3" alt="logo3" src={imglogo}></img>
                    <input
                      type="text"
                      placeholder="CEP"
                      name="cep"
                      {...register("cep", { required: true })}
                    />
                    {errors.cep && <span>CEP ?? Requisito Obrigat??rio</span>}
                  </div>
                  <br />
                </div>
              </div>
              <div class="info2">
                <div class="itens-cadastro">
                  <input
                    type="text"
                    placeholder="Telefone"
                    name="tel"
                    {...register("tel", { required: true })}
                  />
                  {errors.tel && <span>Telefone ?? Requisito Obrigat??rio</span>}
                  <input
                    type="text"
                    placeholder="CPF"
                    name="cpf"
                    {...register("cpf", { required: true })}
                  />
                  {errors.cpf && <span>CPF ?? Requisito Obrigat??rio</span>}
                  <input
                    type="text"
                    placeholder="RG"
                    name="rg"
                    {...register("rg", { required: true })}
                  />
                  {errors.rg && <span>RG ?? Requisito Obrigat??rio</span>}
                </div>
                <div class="novas_infos">
                  <select
                    name="estado_cv"
                    id="estado_cv"
                    {...register("estado_cv", { required: true })}
                  >
                    <option value="Casado(a)">Casado(a)</option>
                    <option value="Solteiro(a)">Solteiro(a)</option>
                    <option value="Vi??vo(a)">Vi??vo(a)</option>
                  </select>
                  {errors.estado_cv && (
                    <span>Estado Civil ?? Requisito Obrigat??rio</span>
                  )}
                  <img class="logo3" alt="logo3" src={imglogo}></img>
                  <input
                    type="text"
                    name="inst_ens"
                    placeholder="Institui????o de Ensino"
                    {...register("inst_ens", { required: true })}
                  />
                  {errors.inst_ens && (
                    <span>Institui????o de Ensino ?? Requisito Obrigat??rio</span>
                  )}
                </div>
                <div class="info_email">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && <span>Email ?? Requisito Obrigat??rio</span>}
                </div>
                <div class="align_buts">
                  <button className="butt" type="reset">
                    Limpar
                  </button>
                  <button
                    className="butt"
                    type="submit"
                    onClick={() => {
                        if(cads){
                            setModalOpen(true);
                        }
                    }}
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default CadastroAssoc;
