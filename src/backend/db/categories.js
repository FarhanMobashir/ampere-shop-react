import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
    imageUrl: "https://i.ibb.co/rp3fMNW/men.png",
  },
  {
    _id: uuid(),
    categoryName: "women",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
    imageUrl: "https://i.ibb.co/3C1fsSR/women.png",
  },
  {
    _id: uuid(),
    categoryName: "kids",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    imageUrl: "https://i.ibb.co/vXTYqH6/kid.png",
  },
  {
    _id: uuid(),
    categoryName: "boys",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    imageUrl: "https://i.ibb.co/MfC5xvy/boy.png",
  },
  {
    _id: uuid(),
    categoryName: "girls",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
    imageUrl: "https://i.ibb.co/Dkb2G7r/girl.png",
  },
];
