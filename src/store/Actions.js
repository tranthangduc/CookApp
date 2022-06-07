export const ACTIONS = {
  NOTIFY: "NOTIFY",
  ADD: "ADD",
  DELETE: "DELETE",
  EDIT: "EDIT",
  SET_INGREDIENTS: "set_ingredients",
  SET_STEP: "set_step",
};

export const addFood = (item, data) => {
  console.log(item);
  return { type: "ADD", payload: [...data, item] };
};

export const deleteFood = (index, data) => {
  const newData = [...data];

  newData.splice(index, 1);

  return { type: "DELETE", payload: newData };
};

export const setIngredients = (ingredients) => {
  return { type: "set_ingredients", payload: ingredients };
};
export const setStep = (steps) => {
  return { type: "set_step", payload: steps };
};
