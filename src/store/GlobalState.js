import { createContext, useReducer } from "react";
import reducers from "./Reducers";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    data: [
      {
        name: "Food Name",
        ingredients: [
          { name: "ingredient 1", mass: "200 gram" },
          { name: "ingredient 2", mass: "200 gram" },
        ],
        howToCook: ["Bước 1", "Bước 2"],
      },
      {
        name: "Food Name",
        ingredients: [
          { name: "ingredient 1", mass: "200 gram" },
          { name: "ingredient 2", mass: "200 gram" },
        ],
        howToCook: ["Bước 1", "Bước 2"],
      },
    ],
    ingredients: [],
    steps: [],
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
