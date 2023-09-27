import "./App.css";
import foodsJson from "./foods.json";
import {FoodBox} from "./components/FoodBox";
import { useState } from "react";
import { AddFoodForm } from "./components/AddFoodForm"

function App() {
   const [foods, setFoods] = useState(foodsJson);

    const handleDelete = (foodId) => {
      const updatedFoods = foods.filter((food) => food.id !== foodId);
         setFoods(updatedFoods)
    }
    const handleAddFood = (newFood) => {
      setFoods([newFood, ...foods]);
    };

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <AddFoodForm onAddFood={handleAddFood} />
      {foods.map((oneFood) => {
        return (
          <FoodBox key={oneFood.id} food={oneFood} onDelete={handleDelete}/>
        );
      })}
    </div>
  );
}

export default App;