import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Mathematics",
    description: "Quiz based on mathematics",
  },
  {
    _id: uuid(),
    categoryName: "Physics",
    description: "Quiz based on physics"
  }
];
