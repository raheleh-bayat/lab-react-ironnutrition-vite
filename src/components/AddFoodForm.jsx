// Your code here

import React, { useState } from "react";
import {v4} from "uuid"

export const AddFoodForm = ({ onAddFood }) => {
  const [formData, setFormData] = useState({
    id: v4(),
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddFood(formData);
    setFormData({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
   
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="calories">Calories</label>
        <input
          type="number"
          id="calories"
          name="calories"
          value={formData.calories}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="servings">Servings</label>
        <input
          type="number"
          id="servings"
          name="servings"
          value={formData.servings}
          onChange={handleChange}
        />
      </div>
      <button type="submit">
        Create
      </button>
    </form>
  );
};
