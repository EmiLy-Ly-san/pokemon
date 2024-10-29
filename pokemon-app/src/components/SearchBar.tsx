import { useState } from "react";
import "../style/SearchBar.css";
import { Pokemon } from "./Card";

interface SearchBarProps {
  pokemons: Pokemon[];
  onSearch: (filteredData: Pokemon[]) => void;
}

function SearchBar({ pokemons, onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(""); // Initialize the searchValue state variable as an empty string
  // Initialize the filteredContacts state variable with the contacts array

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value); // Update searchValue state with current text input value
    if (value) {
      const filteredData = pokemons.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      onSearch(filteredData); // Transmet la liste filtrée à Main
    } else {
      onSearch(pokemons); // Remet tous les Pokémons si la recherche est vide
    }
  };

  return (
    <>
      <div className="input-bar">
        <input
          type="text"
          onChange={handleSearch}
          value={searchValue}
          placeholder="Recherche par nom"
        />
      </div>
    </>
  );
}

export default SearchBar;
