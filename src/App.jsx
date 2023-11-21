import { useState, useEffect } from "react";

import "./App.css";

import Review from "./Review";
import Questions from "./Questions";
import Menu from "./Menu";
import Tabs from "./Tabs";
import Carousel from "./Carousel";
import SlickCarousel from "./SlickCarousel";
import LoremIpsum from "./LoremIpsum";
import ColorGenerator from "./ColorGenerator";
import Birthday from "./Birthday";
import ToursDetail from "./ToursDetail";
import GroceryBud from "./GroceryBud";
function App() {
  return (
    <>
      <main>
        <GroceryBud />
      </main>
      <main>
        <Menu />
      </main>
      <main>
        <ColorGenerator />
      </main>
      <main>
        <LoremIpsum />
      </main>
      <main>
        <Carousel />
      </main>
      <main>
        <SlickCarousel />
      </main>
      <main>
        <Tabs />
      </main>
      <main>
        <Questions />
      </main>
      <main>
        <Review />
      </main>
      <main>
        <Birthday />
      </main>
      <main>
        <ToursDetail />
      </main>
    </>
  );
}

export default App;
