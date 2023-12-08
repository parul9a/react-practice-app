import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Susan" },
  { id: 4, name: "Anna" },
];
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    const newUsers = state.people.filter(
      (user) => user.id !== action.payload.id
    );
    return { ...state, people: newUsers };
  }
  throw new Error(`No matching found. ${action.type} - action type`);
};

export default reducer;
