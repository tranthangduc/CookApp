import React from "react";

export default function FoodListItem({ item }) {
  return (
    <div className="food-detail">
      <h2>Nguyên liệu:</h2>
      <ul>
        {item.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.mass}
          </li>
        ))}
      </ul>
      <h2>Cách nấu:</h2>
      <ul>
        {item.howToCook.map((step, index) => (
          <li key={index}>{`Step ${index + 1} : ${step}`}</li>
        ))}
      </ul>
    </div>
  );
}
