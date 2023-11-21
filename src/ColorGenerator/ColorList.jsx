import React from "react";
import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";
export default function ColorList({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
}
