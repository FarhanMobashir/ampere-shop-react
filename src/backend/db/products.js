import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

/*
  * Product Database
  the product will be of jeans type
  * */

export const products = [
  {
    _id: uuid(),
    name: "Roadster Jeans Men",
    categoryName: "men",
    price: "120",
    rating: "3.2",
    discountPercent: "10",
    tag: "NEW",
    imageUrl: "https://via.placeholder.com/500",
  },
  {
    _id: uuid(),
    name: "Roadster Jeans Women",
    categoryName: "women",
    price: "120",
    rating: "3.2",
    discountPercent: "10",
    tag: "NEW",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: uuid(),
    name: "Roadster Jeans Kids",
    categoryName: "kids",
    price: "120",
    rating: "3.2",
    discountPercent: "10",
    tag: "TRENDING",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: uuid(),
    name: "Roadster Jeans Girls",
    categoryName: "girls",
    price: "120",
    rating: "3.2",
    discountPercent: "10",
    tag: "NEW",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    _id: uuid(),
    name: "Roadster Jeans Boys",
    categoryName: "boys",
    price: "120",
    rating: "3.2",
    discountPercent: "10",
    tag: "NEW",
    imageUrl: "https://via.placeholder.com/150",
  },
];
