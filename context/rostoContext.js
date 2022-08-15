import React, { createContext, useReducer } from "react";

const RostoContext = createContext();

const defaultCartItems = {
  cartItems: [],
};
const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const updatedCartItems = [...state.cartItems, action.item];
    return {
      cartItems: updatedCartItems,
    };
  }
  return defaultCartItems;
};

const RostoContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartItems
  );
  const addToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_TO_CART",
      item,
    });
  };
  const removeFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE_FROM_CART",
      id,
    });
  };

  const INITIAL_STATE = {
    cartItems: cartState.cartItems,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <RostoContext.Provider value={INITIAL_STATE}>
      {props.children}
    </RostoContext.Provider>
  );
};

export { RostoContextProvider, RostoContext };
