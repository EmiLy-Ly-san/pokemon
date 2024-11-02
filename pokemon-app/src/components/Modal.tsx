import "../style/Modal.css";
import { Pokemon } from "./Card";
interface ModalProps {
  currentModalPokemon: Pokemon | null;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}

export default function Modal({
  currentModalPokemon,
  modalIsOpen,
  setModalIsOpen,
}: ModalProps) {
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <section className={`overlay ${modalIsOpen == false && "hidden"}`}>
        <section className={`modal ${modalIsOpen == false && "hidden"}`}>
          <button onClick={closeModal}>
            <img
              className="modalCross"
              src="././assets/icons8-fermer-48.png"
              alt=""
            />
          </button>

          <img src={currentModalPokemon?.imgSrc} alt="" />
          {/* currentModalPokemon? => if(currentModalPokemon) car pokemon peut etre null */}
          <p>{currentModalPokemon?.name}</p>
          <p className="description">{currentModalPokemon?.description}</p>
        </section>
      </section>
    </>
  );
}
