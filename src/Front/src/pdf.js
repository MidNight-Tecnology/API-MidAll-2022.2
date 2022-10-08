import React, {useState} from "react";
import Modal from "./components/Modal";

const Pdf = () =>{
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
    <div className="btPdf">
        <button onClick={() => setIsModalVisible (true)}>visualizar</button>
        {isModalVisible ?  (
        
        <Modal onClose={() => setIsModalVisible (false) }>
        <div >
            <iframe title="pdf" src="add o path do pdf"></iframe>
            </div>  
        </Modal>
        ) :null}
    </div>
    )
}

export default Pdf;