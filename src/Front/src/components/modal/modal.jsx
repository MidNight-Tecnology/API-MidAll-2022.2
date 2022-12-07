const Modal = ({isOpen, setModalOpen, children}) => {
  if (!isOpen) return null;
  return (<>{children}</>)
}

export default Modal