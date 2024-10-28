export interface Pokemon {
  name: string;
  imgSrc: string;
  types: string[];
  description: string;
}

export type CardProps = Pokemon;

export default function Card({ name, imgSrc, types, description }: CardProps) {
  return <div>Card</div>;
}
