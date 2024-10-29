import TypePoke from "./TypePoke.tsx";
import { Type } from "./TypePoke.tsx";

export interface TypesListProps {
  imagesTypesList: Type[];
  sortPokemons: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default function TypesList({
  imagesTypesList,
  sortPokemons,
}: TypesListProps) {
  return (
    <>
      <section className="listType">
        {imagesTypesList.map((type) => {
          return (
            <TypePoke {...type} key={type.name} sortPokemons={sortPokemons} />
          );
        })}
      </section>
    </>
  );
}
