import React, { useState } from "react";
import Modal from "../../components/modal/modal";
import "./modal.css";

export const Teste = () => {
  const [modalOpen, setModalOpen] = useState(false);

  
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
                  <button className="Button">Close</button>
                  <button className="Button">Clipping</button>
              </div>
            </div>
        </div>
      </Modal>
      <div>
        <button
          onClick={() => {
            setModalOpen(true);
          }}
        >Open Modal</button>
      </div>
    </>
  );
};
