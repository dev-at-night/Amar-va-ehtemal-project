import { createContext, useContext, useReducer } from "react";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART } from "./constants";

const CartContext = createContext(null);

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};

const initState = {
  items: [],
};

// helper function
const checkItemExsit = (cart, id) => {
  // if item doesn't exsit the find index function return -1
  const itemIndex = cart.items.findIndex((item) => item.id === id);
  return itemIndex;
};

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      // check the item is already exsit
      // if exist the increment the count of it in cart
      const itemIndex = checkItemExsit(state, action.payload.id);
      if (itemIndex > -1) {
        const mutatedItem = {
          ...state.items[itemIndex],
          count: state.items[itemIndex].count + 1,
        };
        state.items[itemIndex] = mutatedItem;
        return { ...state };
      }
      // item doesnt exist then we should just add it
      return {
        ...state,
        items: [...state.items, { ...action.payload, count: 1 }],
      };
    }

    case REMOVE_FROM_CART: {
      const itemIndex = checkItemExsit(state, action.payload.id);
      // if its count in store are above 2 then decrement the count
      if (state.items[itemIndex].count > 1) {
        const mutatedItem = {
          ...state.items[itemIndex],
          count: state.items[itemIndex].count - 1,
        };
        state.items[itemIndex] = mutatedItem;
        return { ...state };
      }
      // else delete the item because count of 0 means doesnt exist
      // filter every item out except the item with specified id
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }
    case CLEAR_CART:
      return initState;
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const contextValue = {
    state,
    dispatch,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
