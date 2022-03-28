import { useThunkReducer } from "../hooks/useThunkReducer";
import produce from "immer";
import React from "react";

const initialState = {
  products: [],
  cart: [],
  categories: [],
  cartTotal: 0,
  wishlist: [],
};

const reducer = produce((state = initialState, action) => {
  if (action.type === "allProducts") {
    state.products = action.payload.products;
  }
  if (action.type === "addToWishlist") {
    state.wishlist = action.payload.wishlist;
  }

  if (action.type === "allCategories") {
    state.categories = action.payload.categories;
  }

  if (action.type === "getWishlist") {
    state.wishlist = action.payload.wishlist;
  }

  // if (action.type === "FETCH_PRODUCTS") {
  //   return (state.products = action.payload);
  // }
  // if (action.type === "FETCH_CATEGORIES") {
  //   return (state.categories = action.payload);
  // }
  // if (action.type === "FETCH_CART") {
  //   return (state.cart = action.payload);
  // }
  // if (action.type === "FETCH_CART_TOTAL") {
  //   return (state.cartTotal = action.payload);
  // }
  // if (action.type === "FETCH_WISHLIST") {
  //   return (state.wishlist = action.payload);
  // }

  // if (action.type === "ADD_TO_CART") {
  //   return (state.cart = [...state.cart, action.payload]);
  // }
  // if (action.type === "REMOVE_FROM_CART") {
  //   return (state.cart = state.cart.filter(
  //     (item) => item.id !== action.payload
  //   ));
  // }
  // if (action.type === "ADD_TO_WISHLIST") {
  //   return (state.wishlist = [...state.wishlist, action.payload]);
  // }
  // if (action.type === "REMOVE_FROM_WISHLIST") {
  //   return (state.wishlist = state.wishlist.filter(
  //     (item) => item.id !== action.payload
  //   ));
  // }
}, initialState);

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
