import CardsList from "./CardsList";
import { Pokemon } from "./Card";

interface MainProps {
  pokedex: Pokemon[];
}

export default function Main({ pokedex }: MainProps) {
  return (
    <main>
      <h1>Filtrez les pokemons par types !</h1>
      <img src="" alt="pokeball" />
      <CardsList pokedex={pokedex} />
    </main>
  );
}