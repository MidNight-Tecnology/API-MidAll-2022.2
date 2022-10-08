import React from "react";

const Modal = ({ onClose = () => {}, children }) =>{
    
    return (
       
        <div className="modal">
            <button onClick={onClose} className="bt_close">X</button> 
            <div className="container">
            
            <div className="content">{children}</div>

            </div>
        </div>
    );
};

export default Modal;