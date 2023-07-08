import { RestaurentList } from "../components/RestaurentList";
import { useCuisine } from "../contexts/cuisineContext";

export const Home = () => {
  const {
    state: { cuisinesList },
    dispatch,
  } = useCuisine();
  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <h1 className="text-[2rem] font-bold">Food Ordering App</h1>
      <hr />
      <p className="text-xl font-semibold">Select Your Cuisine:</p>
      <ul className="flex justify-center items-center gap-8 py-4">
        {cuisinesList?.map((cuisine) => (
          <li key={cuisine?.id}>
            <button
              className="border py-2 px-4 rounded bg-[#f87171] text-[white] hover:scale-105"
              onClick={() =>
                dispatch({ type: "SELECT_CUISINE", payload: cuisine?.id })
              }
            >
              {cuisine.name}
            </button>
          </li>
        ))}
      </ul>
      <RestaurentList />
    </div>
  );
};
