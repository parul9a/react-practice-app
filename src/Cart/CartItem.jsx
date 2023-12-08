import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useGlobalContext } from "./context";

export default function CartItem({ id, title, img, price, amount }) {
  const { removeItem, increase, decrease } = useGlobalContext();
  return (
    <article className="cart-item">
      <img src={img} title={title} />
      <div>
        <h5>{title}</h5>
        <span className="item-price">{price}</span>
        <button className="remove-btn" onClick={() => removeItem(id)}>
          remove
        </button>
      </div>
      <div>
        <button className="amount-btn" onClick={() => increase(id)}>
          <FaChevronUp className="amount-icon" />
        </button>
        <span className="amount">{amount}</span>
        <button className="amount-btn" onClick={() => decrease(id)}>
          <FaChevronDown className="amount-icon" />
        </button>
      </div>
    </article>
  );
}
