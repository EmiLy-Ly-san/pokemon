import TypePoke from "./TypePoke.tsx";
import { Type } from "./TypePoke.tsx";

export interface TypesListProps {
  imagesTypesList: Type[];
  sortPokemons: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => void;
  activeIdButton: number;
  setActiveIdButton: (id: number) => void;
}

export default function TypesList({
  imagesTypesList,
  sortPokemons,
  activeIdButton,
  setActiveIdButton,
}: TypesListProps) {
  return (
    <>
      <section className="listType">
        {imagesTypesList.map((type) => {
          return (
            <TypePoke
              {...type}
              key={type.name}
              sortPokemons={sortPokemons}
              activeIdButton={activeIdButton}
              setActiveIdButton={setActiveIdButton}
            />
          );
        })}
      </section>
    </>
  );
}
