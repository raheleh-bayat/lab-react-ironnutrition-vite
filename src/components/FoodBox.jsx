// Your code here
import "./food.css"

export const FoodBox = ({ food, onDelete }) => {
  const { name, calories, image, servings } = food;
  const totalCalories = calories * servings;

  return (
    <div className="food-box">
      <p>{name}</p>
      <img src={image} className="food-box-img" />
      <p>Calories: {calories}</p>
      <p>Servings: {servings}</p>
      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>
      <button onClick={()=>{onDelete(food.id)}}>Delete</button>
    </div>
  );
};
