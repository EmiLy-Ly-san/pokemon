import CardsList from "./CardsList";
import { Pokemon } from "./Card";
import SearchBar from "./SearchBar";
import { useState } from "react";
import "../style/main.css";

interface MainProps {
  pokedex: Pokemon[];
  setCurrentModal: (isOpen: boolean, description: string) => void;
  pokemons: Pokemon[];
}

export default function Main({
  pokedex,
  setCurrentModal,
  pokemons,
}: MainProps) {
  const [filteredPoke, setFilteredPoke] = useState(pokedex);

  const handleSearch = (searchResults: Pokemon[]) => {
    setFilteredPoke(searchResults);
  };
  return (
    <main>
      <h1>
        Trouve tes pokemons préférés !
        <img
          src="../src/assets/Miniature_Poké_Ball_EV.png"
          alt="pokeball"
          className="pokeball"
        />
      </h1>
      <SearchBar pokedex={pokedex} onSearch={handleSearch} />
      <CardsList
        pokedex={filteredPoke}
        setCurrentModal={setCurrentModal}
        pokemons={pokemons}
      />
    </main>
  );
}
