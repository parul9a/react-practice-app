import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useGlobalContext } from "./context";
export default function Navbar() {
  const { totalAmount } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <h4>Use Reducer</h4>
        <div className="nav-container">
          <FaCartPlus className="cart-icon" />
          <div className="amount-container">
            <p className="total-amount">{totalAmount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
