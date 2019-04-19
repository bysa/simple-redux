import { combineReducers } from "redux";
import FoodReducer from "./reducer_foods";
import ActiveFoodReducer from "./reducer_active_food";

const allReducers = combineReducers({
  foods: FoodReducer,
  activeFood: ActiveFoodReducer
});

export default allReducers;
