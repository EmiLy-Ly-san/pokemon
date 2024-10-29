import "../style/card.css";

export interface Pokemon {
  name: string;
  imgSrc: string;
  types: string[];
  description: string;
}

export type CardProps = Pokemon & {
  setCurrentModal: (isOpen: boolean, description: string) => void;
};

export default function Card({
  name,
  imgSrc,
  types,
  description,
  setCurrentModal,
}: CardProps) {
  return (
    <article
      className="card"
      onClick={() => setCurrentModal(true, description)}
    >
      <div className="cardHeader">
        <h2 className="titleCard">{name}</h2>
      </div>
      <div className="cardBody">
        <img className="pokePicture" src={imgSrc} alt="" />
      </div>
      <div className="cardFooter">
        <div className={`type type1 background-${types[0]}`}>
          Type {types[0]}
        </div>
        {types[1] && (
          <div className={`type type2 background-${types[1]}`}>
            Type {types[1]}
          </div>
        )}
      </div>
    </article>
  );
}
