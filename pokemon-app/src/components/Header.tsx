import TypesList from "./TypesList";
import { Type } from "./TypePoke";
import "../style/Header.css";
import { Pokemon } from "./Card";

interface HeaderProps {
  imagesTypesList: Type[];
  pokedex: Pokemon[];
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
