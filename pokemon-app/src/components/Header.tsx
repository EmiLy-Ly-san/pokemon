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

  const handleClick = () => {
    setMenuOpen(
      (currentMenuOpen) => !currentMenuOpen
    ); /* 🆕 A chaque fois que je clique sur mon bouton, je dis que je veux setter la valeur de menu open a l'inverse de sa valeur courante grace a !currentMenuOpen. La fonction dans le set State prend en
    parametre la valeur courante (currentMenuOpen -> donnee fournit par useState) au moment de mon setState. Cette facon de faire est la facon LAZY qui permet de setter le state de facon decaler 
    (on lui dot d'attendre d'avoir terminer sa derniere operation),evitant des conflits si un utilisateur fait plein de clic tres vite */
    if (isMenuOpen) {
      if (header && !isMenuOpen) header.style.height = "108px";
    } else {
      if (header && isMenuOpen) header.style.height = "600px";
    }
  };

  return (
    <header>
      <button className="logoButton" data-type="All" onClick={sortPokemons}>
        <img
          className="logopokemon"
          src="../src/assets/pokemon-logo.png"
          alt="logo Pokemon"
        />
      </button>
      <img
        className="burgerMenu"
        src={
          isMenuOpen
            ? "../src/assets/openMenu.svg"
            : "../src/assets/burgerMenu.svg"
        }
        alt=""
        onClick={handleClick}
      />
      <TypesList
        activeIdButton={activeIdButton}
        setActiveIdButton={setActiveIdButton}
        imagesTypesList={imagesTypesList}
        sortPokemons={sortPokemons}
      />
      {isMenuOpen ? (
        <TypesListMini
          setMenuOpen={setMenuOpen}
          activeIdButton={activeIdButton}
          setActiveIdButton={setActiveIdButton}
          imagesTypesList={imagesTypesList}
          sortPokemons={sortPokemons}
        />
      ) : null}
    </header>
  );
}
