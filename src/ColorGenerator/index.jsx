import React, { useState } from "react";
import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function index() {
  const [colors, setColors] = useState(new Values("#f15025").all(10));
  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer position="top-center" />
    </div>
  );
}
