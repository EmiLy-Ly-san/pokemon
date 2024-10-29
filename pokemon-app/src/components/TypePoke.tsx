import "../style/type.css";

export interface Type {
  imgSrc: string;
  name: string;
}

export type TypePokeProps = Type & {
  sortPokemons: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

export default function TypePoke({
  imgSrc,
  sortPokemons,
  name,
}: TypePokeProps) {
  return (
    <>
      <section className="Type">
        <button
          type="button"
          data-type={name}
          onClick={(event) => sortPokemons(event)}
        >
          <img src={imgSrc} alt="" />
        </button>
      </section>
    </>
  );
}
