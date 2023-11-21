import React, { useState } from "react";
import reviewData from "./reviewData.js";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function index() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = reviewData[index];
  const checkNumber = (number) => {
    if (number > reviewData.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviewData.length - 1;
    }
    return number;
  };

  const prevButton = () => {
    setIndex((prevState) => {
      let newIndex = (prevState - 1 + reviewData.length) % reviewData.length;
      return newIndex;
    });
  };
  const nextButton = () => {
    setIndex((index) => {
      let newIndex = (index + 1) % reviewData.length;
      return newIndex;
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviewData.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % reviewData.length;
    setIndex(newIndex);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevButton}>
          <FaChevronLeft />
        </button>
        <button className="prev-btn" onClick={nextButton}>
          <FaChevronRight />
        </button>
      </div>
      <button className="btn btn-hipster" onClick={randomPerson}>
        Suprise Me
      </button>
    </article>
  );
}
