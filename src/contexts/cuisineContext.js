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
    case "ADD_REVIEW":
      const updatedRestaurants = state.restaurentList.map((item) => {
        if (item?.id === parseInt(payload?.restaurentId)) {
          const newRatings = [payload?.ratingData, ...item.ratings];
          const newAverageRating =
            (item.averageRating * item.ratings.length +
              payload?.ratingData.rating) /
            (item.ratings.length + 1);
          return {
            ...item,
            ratings: newRatings,
            averageRating: newAverageRating.toFixed(1),
          };
        }
        return item;
      });
      return { ...state, restaurentList: updatedRestaurants };
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
