import "../style/Modal.css";
interface ModalProps {
  currentModalDescription: string;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

export default function Modal({
  currentModalDescription,
  modalIsOpen,
  setModalIsOpen,
}: ModalProps) {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <section className={`modal ${modalIsOpen == false && "hidden"}`}>
        <button onClick={closeModal}>
          <img
            className="modalCross"
            src="./src/assets/icons8-fermer-48.png"
            alt=""
          />
        </button>

        <p>{currentModalDescription}</p>
      </section>
      <section
        className={`overlay ${modalIsOpen == false && "hidden"}`}
      ></section>
    </>
  );
}
