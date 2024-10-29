import TypesList from "./TypesList";
import { Type } from "./Type";
import "../style/Header.css";

interface HeaderProps {
  imagesTypesList: Type[];
}

export default function Header({ imagesTypesList }: HeaderProps) {
  return (
    <header>
      <img
        className="logopokemon"
        src="../src/assets/pokemon-logo.png"
        alt="logo Pokemon"
      />
      <TypesList imagesTypesList={imagesTypesList} />
    </header>
  );
}
