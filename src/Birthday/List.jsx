import React from "react";
import Person from "./Person";

export default function List({ people }) {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </section>
  );
}
