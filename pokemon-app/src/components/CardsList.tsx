import { Pokemon } from "./Card";
import Card from "./Card";
import "../style/cardsList.css";

interface CardsListProps {
  pokedex: Pokemon[];
  setCurrentModal: (isOpen: boolean, description: string) => void;
  pokemons: Pokemon[];
}

export default function CardsList({
  setCurrentModal,
  pokemons,
}: CardsListProps) {
  return (
    <section className="cardsList">
      {pokemons.map((pokemon) => {
        return (
          <Card
            {...pokemon}
            key={pokemon.name}
            setCurrentModal={setCurrentModal}
          />
        );
        /*on peut spreader l'objet courant {...project} de la boucle, qui est en paramètres, pour assigner toutes ses propriétées en tant que props au composant*/
      })}
    </section>
  );
}
