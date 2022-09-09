import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constants";
export function addToCartAction(newItem) {
  return {
    type: ADD_TO_CART,
    payload: newItem,
  };
}

export function removeFromCartAction(item) {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
}

export function clearCartAction() {
  return {
    type: CLEAR_CART,
  };
}
