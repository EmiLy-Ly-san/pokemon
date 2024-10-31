import TypesList from "./TypesList";
import { Type } from "./TypePoke";
import "../style/Header.css";

interface HeaderProps {
  imagesTypesList: Type[];
  sortPokemons: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  activeIdButton: number;
  setActiveIdButton: (id: number) => void;
}

export default function Header({
  imagesTypesList,
  sortPokemons,
  activeIdButton,
  setActiveIdButton,
}: HeaderProps) {
  return (
    <header>
      <img
        className="logopokemon"
        src="../src/assets/pokemon-logo.png"
        alt="logo Pokemon"
      />
      <TypesList
        activeIdButton={activeIdButton}
        setActiveIdButton={setActiveIdButton}
        imagesTypesList={imagesTypesList}
        sortPokemons={sortPokemons}
      />
    </header>
  );
}
