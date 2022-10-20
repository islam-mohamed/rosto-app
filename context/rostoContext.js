import React, { createContext, useReducer, useEffect, useState } from "react";

const RostoContext = createContext();

const cartReducer = (state, action) => {
  const existingItemIndex = state.cartItems.findIndex(
    (item) => item.id === action.item.id
  );
  const existingItem = state.cartItems[existingItemIndex];

  if (action.type === "ADD_TO_CART") {
    let updatedCartItems;
    if (existingItem && existingItem.price === action.item.price) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex] = updatedItem;
    } else {
      updatedCartItems = [...state.cartItems, action.item];
    }
    return {
      cartItems: updatedCartItems,
    };
  }

  if (action.type === "INCREASE_ITEM_COUNT") {
    let updatedCartItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex] = updatedItem;
    }
    return {
      cartItems: updatedCartItems,
    };
  }

  if (action.type === "REMOVE_FROM_CART") {
    let updatedCartItems;

    if (existingItem.quantity === 1) {
      updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.item.id
      );
    } else {
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updatedCartItems = [...state.cartItems];
      updatedCartItems[existingItemIndex] = updatedItem;
    }
    return {
      cartItems: updatedCartItems,
    };
  }
  return defaultCartItems;
};

const RostoContextProvider = (props) => {
  const [localCart, setLocalCart] = useState(
    (typeof window !== "undefined" &&
      JSON.parse(localStorage.getItem("cart")) !== undefined &&
      JSON.parse(localStorage.getItem("cart"))) ||
      []
  );
  console.log(localCart);

  const defaultCartItems = {
    cartItems: localCart,
  };
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartItems
  );
  const addToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD_TO_CART",
      item: item,
    });
  };
  const increaseItemCount = (item) => {
    dispatchCartAction({
      type: "INCREASE_ITEM_COUNT",
      item: item,
    });
  };
  const removeFromCartHandler = (item) => {
    dispatchCartAction({
      type: "REMOVE_FROM_CART",
      item: item,
    });
  };

  const INITIAL_STATE = {
    cartItems: cartState.cartItems,
    addToCart: addToCartHandler,
    increaseItemCount: increaseItemCount,
    removeFromCart: removeFromCartHandler,
  };
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cartState.cartItems));
  }, [cartState.cartItems]);

  return (
    <RostoContext.Provider value={INITIAL_STATE}>
      {props.children}
    </RostoContext.Provider>
  );
};

export { RostoContextProvider, RostoContext };
