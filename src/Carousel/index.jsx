import React, { useState, useEffect } from "react";
import { shortList, list, longList } from "./data.js";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./carousel.css";
export default function index() {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);
  const prevSlide = () => {
    setCurrentPerson((old) => {
      const res = (old - 1 + people.length) % people.length;
      return res;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((old) => {
      const res = (old + 1) % people.length;
      return res;
    });
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, [currentPerson]);
  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? "visible" : "hidden",
            }}
            key={person.id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
}
