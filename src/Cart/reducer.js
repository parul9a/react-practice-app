import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
export const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }
  if (action.type == INCREASE) {
    const newCart = new Map(state.cart);
    const cartId = action.payload.id;
    const item = newCart.get(cartId);
    const newItem = { ...item, amount: item.amount + 1 };
    newCart.set(cartId, newItem);
    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const cartId = action.payload.id;
    const item = newCart.get(cartId);
    if (item.amount === 1) {
      newCart.delete(cartId);
      return { ...state, cart: newCart };
    }
    newCart.set(cartId, { ...item, amount: item.amount - 1 });
    return { ...state, cart: newCart };
  }
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === DISPLAY_ITEMS) {
    const newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
    return { ...state, loading: false, cart: newCart };
  }
  throw new Error(`no matching action type ${action.type}`);
};
