import TypesList from "./TypesList";
import { Type } from "./TypePoke";
import "../style/Header.css";

interface HeaderProps {
  imagesTypesList: Type[];
  sortPokemons: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

export default function Header({ imagesTypesList, sortPokemons }: HeaderProps) {
  return (
    <header>
      <img
        className="logopokemon"
        src="../src/assets/pokemon-logo.png"
        alt="logo Pokemon"
      />
      <TypesList
        imagesTypesList={imagesTypesList}
        sortPokemons={sortPokemons}
      />
    </header>
  );
}
