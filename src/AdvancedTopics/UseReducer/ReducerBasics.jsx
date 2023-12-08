import React, { useReducer } from "react";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import reducer from "./reducer";
const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Susan" },
  { id: 4, name: "Anna" },
];
const defaultState = {
  people: data,
  loading: false,
};

export default function ReducerBasics() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const clearAll = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const resetItem = () => {
    dispatch({ type: RESET_LIST });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  return (
    <div className="container">
      <ul>
        {state.people.map((user) => {
          return (
            <li key={user.id}>
              <p>{user.name}</p>
              <button className="btn" onClick={() => removeItem(user.id)}>
                Remove
              </button>
            </li>
          );
        })}
      </ul>
      {state.people.length < 1 ? (
        <button className="btn" onClick={resetItem}>
          Reset
        </button>
      ) : (
        <button className="btn" onClick={clearAll}>
          Clear All
        </button>
      )}
    </div>
  );
}
