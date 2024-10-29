import CardsList from "./CardsList";
import { Pokemon } from "./Card";

interface MainProps {
  pokedex: Pokemon[];
  setCurrentModal: (isOpen: boolean, description: string) => void;
}

export default function Main({ pokedex, setCurrentModal }: MainProps) {
  return (
    <main>
      <h1>Filtrez les pokemons par types !</h1>
      <img src="" alt="pokeball" />
      <CardsList pokedex={pokedex} setCurrentModal={setCurrentModal} />
    </main>
  );
}
