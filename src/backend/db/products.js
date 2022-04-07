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
    price: "1499",
    rating: "4.2",
    discountPercent: "10",
    tag: "NEW",
    imageUrl: "https://i.ibb.co/H7PLjjQ/men-jeans.jpg",
  },
  {
    _id: uuid(),
    name: "Soft and Comfortable Women Jeans",
    categoryName: "women",
    price: "130",
    rating: "3.9",
    discountPercent: "10",
    tag: "NEW",
    imageUrl: "https://i.ibb.co/X7Z0vP4/women-jeans.webp",
  },
  {
    _id: uuid(),
    name: "Soft Kids Jeans",
    categoryName: "kids",
    price: "999",
    rating: "2.4",
    discountPercent: "10",
    tag: "TRENDING",
    imageUrl: "https://i.ibb.co/WBQ0sh0/kid-jeans.jpg",
  },
  {
    _id: uuid(),
    name: "Trending Floral Jeans",
    categoryName: "girls",
    price: "1499",
    rating: "3.2",
    discountPercent: "10",
    tag: "NEW",
    imageUrl: "https://i.ibb.co/D9vpvGP/girls-jeans.webp",
  },
  {
    _id: uuid(),
    name: "Comfortable Jeans - Soft Fabric",
    categoryName: "boys",
    price: "2499",
    rating: "3.2",
    discountPercent: "10",
    tag: "NEW",
    imageUrl: "https://i.ibb.co/Wnjwn1P/boy-jeans.webp",
  },
];
