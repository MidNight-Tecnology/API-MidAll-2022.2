import React, {useState} from "react";
import Modal from "./components/Modal";

const Pdf = (path) =>{
    const [isModalVisible, setIsModalVisible] = useState(false)
    return (
    <div className="btPdf">
        <button onClick={() => setIsModalVisible (true)}>visualizar</button>
        {isModalVisible ?  (
        
        <Modal onClose={() => setIsModalVisible (false) }>
        <div >
            <iframe title="pdf" src="http://www.africau.edu/images/default/sample.pdf"></iframe>
            </div>  
        </Modal>
        ) :null}
    </div>
    )
}

export default Pdf;