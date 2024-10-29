import "../style/type.css";

export interface Type {
  imgSrc: string;
  name: string;
}

export type TypeProps = Type;

export default function TypePoke({ imgSrc, name }: TypeProps) {
  return (
    <>
      <section className="Type">
        <img src={imgSrc} alt="" />
      </section>
    </>
  );
}
