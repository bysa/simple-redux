import React from "react";
import FoodList from "../containers/food-list";
import FoodDetail from "../containers/food-detail";
import AddFood from "../containers/add-food";

export default function App() {
  return (
    <div>
      <h2>Food List:</h2>
      <FoodList />
      <AddFood />
      <hr />
      <h2>Food Details:</h2>
      <FoodDetail />
    </div>
  );
}
