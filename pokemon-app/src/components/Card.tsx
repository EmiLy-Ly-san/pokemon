import "../style/card.css";

export interface Pokemon {
  name: string;
  imgSrc: string;
  types: string[];
  description: string;
}

export type CardProps = Pokemon;

export default function Card({ name, imgSrc, types, description }: CardProps) {
  return (
    <article className="card">
      <div className="cardHeader">
        <h2>{name}</h2>
      </div>
      <div className="cardBody">
        <img src={imgSrc} alt="" />
      </div>
      <div className="cardFooter">
        <p>{types[0]}</p>
        {types[1] && <p> | {types[1]}</p>}
      </div>
    </article>
  );
}
