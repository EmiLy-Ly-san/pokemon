import CardsList from "./CardsList";
import { Pokemon } from "./Card";
import SearchBar from "./SearchBar";
import "../style/main.css";

interface MainProps {
  setCurrentModal: (isOpen: boolean, pokemon: Pokemon) => void;
  pokemons: Pokemon[];
  setPokemons: (pokemons: Pokemon[]) => void;
}

export default function Main({
  setCurrentModal,
  pokemons,
  setPokemons,
}: MainProps) {
  // const [filteredPoke, setFilteredPoke] = useState(pokedex);// 💣 ancien State de Valou qui fait la meme chose que le set initial dans App avec les meme donnes ce qui permet de faire un double filtre 👌

  const handleSearch = (searchResults: Pokemon[]) => {
    setPokemons(searchResults);
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
      <SearchBar pokemons={pokemons} onSearch={handleSearch} />
      <CardsList setCurrentModal={setCurrentModal} pokemons={pokemons} />
    </main>
  );
}
