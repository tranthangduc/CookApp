export const ACTIONS = {
  ADD: "ADD",
  DELETE: "DELETE",
  EDIT: "EDIT",
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
