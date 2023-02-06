import { useContext } from "react";
import { ModalContext } from "../../pages/Root";

const Modal = () => {
    const {modal, toggleModal} = useContext(ModalContext);

    return (
        <section className={`overlay ${modal ? "active" : ""}`}>
            <div className="modal">
                <header className="modal-header">
                    <h2>Корзина</h2>
                </header>

                <div className="modal-body">

                </div>

                <footer SSSclassName="modal-footer">
                    
                </footer>
            </div>
        </section>
    );
}

export default Modal;