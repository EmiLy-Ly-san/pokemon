import "../style/type.css";

export interface Type {
  imgSrc: string;
  name: string;
  id: number;
}

export type TypePokeProps = Type & {
  sortPokemons: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => void;
  activeIdButton: number;
  setActiveIdButton: (id: number) => void;
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
};

export default function TypePoke({
  imgSrc,
  sortPokemons,
  name,
  id,
  activeIdButton,
  isMenuOpen,
  setMenuOpen,
}: TypePokeProps) {
  const active = activeIdButton === id ? "active" : "";

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    sortPokemons(event, id);
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className="type">
        <button
          className={active}
          type="button"
          data-id={id}
          data-type={name}
          onClick={(event) => {
            handleClick(event, id);
          }}
        >
          <img src={imgSrc} alt="" />
        </button>
      </div>
    </>
  );
}
