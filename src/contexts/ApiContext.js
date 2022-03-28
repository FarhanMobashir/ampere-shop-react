import React from "react";
import { buildHooks, fetchBaseQuery } from "../helpers/buildApiHooks";
import { AuthContext } from "./AuthContex";
import { useData } from "./DataContext";

export const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
  const { dispatch: dataProviderDispatch } = useData();
  const { authToken } = React.useContext(AuthContext);

  const publicApi = buildHooks(
    [
      {
        name: "allProducts",
        query: "/products",
        type: "query",
        method: "GET",
      },
      {
        name: "getSingleProduct",
        query: "/products",
        type: "query",
        method: "GET",
      },
      {
        name: "allCategories",
        query: "/categories",
        type: "query",
        method: "GET",
      },
      {
        name: "singleCategories",
        query: "/categories",
        type: "query",
        method: "GET",
      },
    ],
    fetchBaseQuery({
      baseUrl: "http://localhost:3000/api",
    }),
    dataProviderDispatch
  );

  const headers = {
    authorization: authToken,
  };

  const privateApi = buildHooks(
    [
      // * wishlist actions
      {
        name: "getWishlist",
        query: "/user/wishlist",
        type: "query",
        method: "GET",
      },
      {
        name: "addToWishlist",
        query: "/user/wishlist",
        type: "mutation",
        method: "POST",
      },
      {
        name: "deleteFromWishlist",
        query: "/user/wishlist",
        type: "mutation",
        method: "DELETE",
      },
      // * cart actions
      {
        name: "getCart",
        query: "/user/cart",
        type: "query",
        method: "GET",
      },
      {
        name: "addToCart",
        query: "/user/cart",
        type: "mutation",
        method: "POST",
      },
      {
        name: "deleteFromCart",
        query: "/user/cart",
        type: "mutation",
        method: "DELETE",
      },
      {
        name: "updateCart",
        query: "/user/cart",
        type: "mutation",
        method: "POST",
      },
    ],
    fetchBaseQuery({
      baseUrl: "http://localhost:3000/api",
      headers: headers,
    })
  );

  const value = React.useMemo(() => {
    return {
      ...publicApi,
      ...privateApi,
    };
  }, [publicApi, privateApi]);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => React.useContext(ApiContext);
