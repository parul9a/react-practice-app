import React from "react";
import "./index.css";
import { AppProvider } from "./context";
import Main from "./main";
export default function index() {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
}
