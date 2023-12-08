import { useState, useEffect } from "react";

import "./App.css";

import Review from "./Review";
import Questions from "./Questions";
import Menu from "./Menu";
import Tabs from "./Tabs";
import Carousel from "./Carousel";
import LoremIpsum from "./LoremIpsum";
import ColorGenerator from "./ColorGenerator";
import Birthday from "./Birthday";
import ToursDetail from "./ToursDetail";
import GroceryBud from "./GroceryBud";
import SearchFilter from "./SearchFilter";
import UserMultipleInputs from "./UserMultipleInputs";
import CheckboxSelectItem from "./CheckboxSelectItem";
import FormDataApi from "./AdvancedTopics/FormDataApi";
import UseRefExample from "./AdvancedTopics/UseRefExample";
import NavBar from "./Navbar";
import ContextApi from "./AdvancedTopics/ContextApi";
import SideBarModal from "./SideBarModal";
import Cart from "./Cart";
// import ReducerBasics from "./AdvancedTopics/UseReducer/ReducerBasics";
// import CustomHooks from "./AdvancedTopics/CustomHooks/ToggleHook";
// import FetchPerson from "./AdvancedTopics/CustomHooks/FetchPerson";
function App() {
  return (
    <>
      <SideBarModal />
      <Cart />
      <NavBar />
      <ContextApi />
      <main>
        <GroceryBud />
      </main>
      <UseRefExample />
      <FormDataApi />
      <CheckboxSelectItem />
      <main>
        <SearchFilter />
      </main>
      <main>
        <UserMultipleInputs />
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
