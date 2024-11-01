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
  isMenuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

export default function TypesListMini({
  imagesTypesList,
  sortPokemons,
  activeIdButton,
  setActiveIdButton,
  isMenuOpen,
  setMenuOpen,
}: TypesListProps) {
  return (
    <>
      <section className="typesListMini">
        {imagesTypesList.map((type) => {
          return (
            <TypePoke
              {...type}
              key={type.name}
              sortPokemons={sortPokemons}
              activeIdButton={activeIdButton}
              setActiveIdButton={setActiveIdButton}
              isMenuOpen={isMenuOpen}
              setMenuOpen={setMenuOpen}
            />
          );
        })}
      </section>
    </>
  );
}
