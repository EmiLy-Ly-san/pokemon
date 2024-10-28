import { Pokemon } from "./Card";

interface CardsListProps {
  pokedex: Pokemon[];
}

export default function CardsList({ pokedex }: CardsListProps) {
  return (
    <section>
      <Card pokedex={pokedex} />
    </section>
  );
}
