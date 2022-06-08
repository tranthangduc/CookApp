import { createContext, useEffect, useReducer } from "react";
import reducers from "./Reducers";

export const DataContext = createContext();

const useLocalStorage = (key, data) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);
};

export const DataProvider = ({ children }) => {
  const initialState =
    JSON.parse(localStorage.getItem("state")) !== null
      ? JSON.parse(localStorage.getItem("state"))
      : {
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
        };
  const [state, dispatch] = useReducer(reducers, initialState);

  useLocalStorage("state", state);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
