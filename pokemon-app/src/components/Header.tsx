import TypesList from "./TypesList";
import { Type } from "./TypePoke";
import "../style/Header.css";
import { useState } from "react";
import TypesListMini from "./TypeListMini";

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
  const header = document.querySelector("header");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const currentSrc: string | null = event.currentTarget.getAttribute("src");
    const nextSrc: string | null = event.currentTarget.getAttribute("data-src");
    if (nextSrc) event.currentTarget.setAttribute("src", nextSrc);
    if (currentSrc) event.currentTarget.setAttribute("data-src", currentSrc);
    if (isMenuOpen) {
      setMenuOpen(false);
      if (header && !isMenuOpen) header.style.height = "108px";
    } else {
      setMenuOpen(true);
      if (header && isMenuOpen) header.style.height = "600px";
    }
  };

  return (
    <header>
      <button
        className="logoButton"
        data-type="All"
        onClick={(event) => sortPokemons(event)}
      >
        <img
          className="logopokemon"
          src="../src/assets/pokemon-logo.png"
          alt="logo Pokemon"
        />
      </button>
      <img
        className="burgerMenu"
        src="../src/assets/burgerMenu.svg"
        alt=""
        data-src="../src/assets/openMenu.svg"
        onClick={(event) => handleClick(event)}
      />
      <TypesList
        activeIdButton={activeIdButton}
        setActiveIdButton={setActiveIdButton}
        imagesTypesList={imagesTypesList}
        sortPokemons={sortPokemons}
      />
      {isMenuOpen ? (
        <TypesListMini
          activeIdButton={activeIdButton}
          setActiveIdButton={setActiveIdButton}
          imagesTypesList={imagesTypesList}
          sortPokemons={sortPokemons}
        />
      ) : null}
    </header>
  );
}
