import { ADD_NEW_FOOD, FOOD_SELECTED } from "./types";

export const selectFood = food => {
  return {
    type: FOOD_SELECTED,
    payload: food
  };
};

export const addNewFood = food => {
  return {
    type: ADD_NEW_FOOD,
    payload: food
  };
};
