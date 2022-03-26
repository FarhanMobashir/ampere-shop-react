import React from "react";
import { buildHooks, fetchBaseQuery } from "../helpers/buildApiHooks";
import { AuthContext } from "./AuthContex";

export const ApiContext = React.createContext();

export const ApiProvider = ({ children }) => {
  const { authToken } = React.useContext(AuthContext);
  console.log("from api provider", authToken);

  const publicApi = buildHooks(
    [
      { name: "allProducts", query: "/products", type: "query", method: "GET" },
      {
        name: "allCategories",
        query: "/categories",
        type: "query",
        method: "GET",
      },
    ],
    fetchBaseQuery({
      baseUrl: "http://localhost:3000/api",
    })
  );

  const headers = {
    authorization: authToken,
  };

  const privateApi = buildHooks(
    [
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
    ],
    fetchBaseQuery({
      baseUrl: "http://localhost:3000/api",
      headers: headers,
    })
  );

  const value = {
    ...publicApi,
    ...privateApi,
  };

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => React.useContext(ApiContext);
