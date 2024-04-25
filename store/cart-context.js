"use client";
import { useEffect, useState } from "react";
import { useReducer, createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  resetCart: () => {},
  favorites: [],
});

const initialCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItems = [...state.items];
    if (existingCartItemIndex > -1) {
      const updateItem = {
        ...existingItems[existingCartItemIndex],
        quantity: existingItems[existingCartItemIndex].quantity + 1,
        totalPrice:
          existingItems[existingCartItemIndex].price +
          existingItems[existingCartItemIndex].price *
            existingItems[existingCartItemIndex].quantity,
      };
      existingItems[existingCartItemIndex] = updateItem;
    } else {
      existingItems.push({
        ...action.item,
        quantity: 1,
        totalPrice: action.item.price,
      });
    }
    return {
      items: existingItems,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItems = [...state.items];
    if (existingItems[existingCartItemIndex].quantity === 1) {
      existingItems.splice(existingCartItemIndex, 1);
    } else {
      const updateItem = {
        ...existingItems[existingCartItemIndex],
        quantity: existingItems[existingCartItemIndex].quantity - 1,
        totalPrice:
          existingItems[existingCartItemIndex].totalPrice -
          existingItems[existingCartItemIndex].price,
      };
      existingItems[existingCartItemIndex] = updateItem;
    }
    return {
      items: existingItems,
    };
  }
  if (action.type === "RESET") {
    return {
      items: [],
    };
  }
};

export const CartContextProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(
    cartReducer,
    initialCartState,
    () => {
      if (typeof window !== "undefined") {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : { items: [] };
      }
    }
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cart", JSON.stringify(cartState));
    }
  }, [cartState]);

  const addItem = (item) => {
    cartDispatch({ type: "ADD", item: item });
  };
  const removeItem = (id) => {
    cartDispatch({ type: "REMOVE", id: id });
  };
  const handleReset = () => {
    cartDispatch({ type: "RESET" });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState?.items,
        addItem,
        removeItem,
        resetCart: handleReset,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
