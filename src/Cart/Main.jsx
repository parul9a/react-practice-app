import React from "react";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "./context";

export default function Main() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <Navbar />
      <CartContainer />
    </div>
  );
}
