import { useState } from "react";
import "../style/SearchBar.css";
import { Pokemon } from "./Card";

interface SearchBarProps {
  pokedex: Pokemon[];
  onSearch: (filteredData: Pokemon[]) => void;
}

function SearchBar({ pokedex, onSearch }: SearchBarProps) {
  const [searchValue, setSearchValue] = useState(""); // Initialize the searchValue state variable as an empty string
  // Initialize the filteredContacts state variable with the contacts array

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value); // Update searchValue state with current text input value
    if (value) {
      const filteredData = pokedex.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      onSearch(filteredData); // Transmet la liste filtrée à Main
    } else {
      onSearch(pokedex); // Remet tous les Pokémons si la recherche est vide
    }
  };

  return (
    <>
      <input
        type="text"
        onChange={handleSearch}
        value={searchValue}
        placeholder="Recherche"
      />
    </>
  );
}

export default SearchBar;
