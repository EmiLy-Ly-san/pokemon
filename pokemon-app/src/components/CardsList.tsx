import { Pokemon } from "./Card";
import Card from "./Card";
import "../style/cardsList.css";

interface CardsListProps {
  pokedex: Pokemon[];
}

export default function CardsList({ pokedex }: CardsListProps) {
  return (
    <section className="cardsList">
      {pokedex.map((pokemon) => {
        return <Card {...pokemon} />;
        /*on peut spreader l'objet courant {...project} de la boucle, qui est en paramètres, pour assigner toutes ses propriétées en tant que props au composant*/
      })}
    </section>
  );
}
