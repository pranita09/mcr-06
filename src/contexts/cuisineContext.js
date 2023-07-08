import { createContext, useContext, useReducer } from "react";
import { cuisineData, restaurantsData } from "../data/data";

export const CuisineContext = createContext();

const initialState = {
  cuisinesList: cuisineData,
  restaurentList: restaurantsData,
  selectedCuisine: "",
  selectedRestaurent: "",
};

const cuisineReducer = (state, { type, payload }) => {
  switch (type) {
    case "SELECT_CUISINE":
      return { ...state, selectedCuisine: payload };
    default:
      return state;
  }
};

export const CuisineProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cuisineReducer, initialState);
  return (
    <CuisineContext.Provider value={{ state, dispatch }}>
      {children}
    </CuisineContext.Provider>
  );
};

export const useCuisine = () => useContext(CuisineContext);
