import { ADD_NEW_FOOD } from "../actions/types";

const initialState = {
  foods: [
    {
      id: 1,
      name: "Meat Balls",
      ingredients: "Ground Beef, Onion",
      description: "Delicious nutrient beef",
      calories: 710,
      thumbnail: ""
    },
    {
      id: 2,
      name: "Pasta",
      ingredients: "Pasta, Mushrooms",
      description: "Nutrient Carbohydrate meal",
      calories: 310,
      thumbnail: ""
    },
    {
      id: 3,
      name: "Gheimeh + Rice",
      ingredients: "Rice, Beef Cubes",
      description: "Delicious persian dish",
      calories: 423,
      thumbnail: ""
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.payload]
      };
    default:
      return state;
  }
}
