import { useCuisine } from "../contexts/cuisineContext";
import { MenuCard } from "./MenuCard";

export const RestaurentList = () => {
  const {
    state: { selectedCuisine, restaurentList },
  } = useCuisine();

  if (selectedCuisine === false) {
    return null;
  }

  const restaurents = restaurentList?.filter(
    (restaurent) => restaurent?.cuisine_id === selectedCuisine
  );

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-2">
      {restaurents?.map((restaurent) => (
        <div key={restaurent?.id}>
          <h1 className="text-2xl py-4">Dishes By {restaurent?.name}</h1>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {restaurent?.menu?.map((menu, index) => (
              <MenuCard
                key={index}
                menu={menu}
                restaurent={restaurent?.name}
                restaurentId={restaurent?.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
