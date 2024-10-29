import CardsList from "./CardsList";
import { Pokemon } from "./Card";
import SearchBar from "./SearchBar";
import { useState } from "react";

interface MainProps {
  pokedex: Pokemon[];
  setCurrentModal: (isOpen: boolean, description: string) => void;
}

export default function Main({ pokedex }: MainProps) {
  const [filteredPoke, setFilteredPoke] = useState(pokedex);

  const handleSearch = (searchResults: Pokemon[]) => {
    setFilteredPoke(searchResults);
  };
  return (
    <main>
      <h1>Filtrez les pokemons par types !</h1>
      <img src="" alt="pokeball" />
      <SearchBar pokedex={pokedex} onSearch={handleSearch} />
      <CardsList pokedex={filteredPoke} setCurrentModal={setCurrentModal} />
    </main>
  );
}
