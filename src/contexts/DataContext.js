import { useThunkReducer } from "../hooks/useThunkReducer";
import produce from "immer";
import React from "react";

const initialState = {
  products: [],
  productForUi: [],
  cart: [],
  categories: [],
  wishlist: [],
};

const reducer = produce((state = initialState, action) => {
  //* products actions
  if (action.type === "allProducts") {
    state.products = action.payload.products;
    state.productForUi = action.payload.products;
  }
  // * categories actions
  if (action.type === "allCategories") {
    state.categories = action.payload.categories;
  }
  // * wishlist actions
  if (action.type === "getWishlist") {
    state.wishlist = action.payload.wishlist;
  }

  if (action.type === "addToWishlist") {
    state.wishlist = action.payload.wishlist;
  }

  if (action.type === "deleteFromWishlist") {
    state.wishlist = action.payload.wishlist;
  }
  // * cart actions
  if (action.type === "getCart") {
    state.cart = action.payload.cart;
  }

  if (action.type === "addToCart") {
    state.cart = action.payload.cart;
  }

  if (action.type === "deleteFromCart") {
    state.cart = action.payload.cart;
  }
  if (action.type === "updateCart") {
    state.cart = action.payload.cart;
  }
}, initialState);

export const DataContext = React.createContext();
DataContext.displayName = "DataContext";

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
