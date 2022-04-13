import styles from "./Modal.module.css"
import { createPortal } from "react-dom/cjs/react-dom.production.min"

const Backdrop = ({ onClose }) => {
  return <div className={styles.backdrop} onClick={onClose} />
}

const ModalOveraly = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {createPortal(
        <ModalOveraly>{props.children}</ModalOveraly>,
        portalElement
      )}
    </>
  )
}

export default Modal
