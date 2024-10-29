import TypePoke from "./Type";
import { Type } from "./Type";

export interface TypesListProps {
  imagesTypesList: Type[];
}

export default function TypesList({ imagesTypesList }: TypesListProps) {
  return (
    <>
      <section className="listType">
        {imagesTypesList.map((Type) => {
          return <TypePoke {...Type} />;
        })}
      </section>
    </>
  );
}
