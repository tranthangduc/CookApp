import React from "react";

export default function FoodListItem({ item }) {
  return (
    <div className="food-detail">
      <h2>材料:</h2>
      <ul>
        {item.ingredients.map((ingredient, index) => (
          <li key={index}>
            {ingredient.name} - {ingredient.mass}
          </li>
        ))}
      </ul>
      <h2>作り方:</h2>
      <ul>
        {item.howToCook.map((step, index) => (
          <li key={index}>{`ステップ ${index + 1} : ${step}`}</li>
        ))}
      </ul>
    </div>
  );
}
