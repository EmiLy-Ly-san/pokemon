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
};

export default function TypePoke({
  imgSrc,
  sortPokemons,
  name,
  id,
  activeIdButton,
}: TypePokeProps) {
  const active = activeIdButton === id ? "active" : "";
  return (
    <>
      <div className="Type">
        <button
          className={active}
          type="button"
          data-id={id}
          data-type={name}
          onClick={(event) => {
            sortPokemons(event, id);
          }}
        >
          <img src={imgSrc} alt="" />
        </button>
      </div>
    </>
  );
}
