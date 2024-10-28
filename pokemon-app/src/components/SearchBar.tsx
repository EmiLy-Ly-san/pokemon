import { useState } from "react";
import "../style/SearchBar.css";

function SearchBar({ pokedex }) {
  const [searchValue, setSearchValue] = useState(""); // Initialize the searchValue state variable as an empty string
  const [filteredPoke, setFilteredPoke] = useState(pokedex); // Initialize the filteredContacts state variable with the contacts array

  const handleSearch = (e) => {
    setSearchValue(e.target.value); // Update searchValue state with current text input value
    if (searchValue) {
      const filteredData = pokedex.filter((item) => {
        // Convert all values of the contact object to a string, join     them, convert the string to lowercase and return the contact object if it includes the searchValue
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredPoke(filteredData); // Update filteredContacts state with filtered array
    } else {
      setFilteredPoke(pokedex); // Reset filteredContacts to all contacts when input is empty
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
      {filteredPoke.map((poke) => (
        <p key={poke.imgSrc}>
          <p>Name: {poke.name}</p>
          <p>Type: {poke.types}</p>
        </p>
      ))}
    </>
  );
}

export default SearchBar;
