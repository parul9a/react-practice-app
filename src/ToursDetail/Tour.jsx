import React, { useState } from "react";

export default function Tour({ id, image, info, name, price, removeTours }) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? " show less" : " read more"}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => removeTours(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
}