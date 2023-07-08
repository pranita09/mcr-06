export const MenuCard = ({ menu, restaurent }) => {
  return (
    <div className="flex flex-col rounded-md w-[12rem] h-[19.5rem] shadow-lg hover:cursor-pointer">
      <div className="w-[100%] h-[65%]">
        <img
          src={menu?.imgSrc}
          alt={menu?.name}
          className="h-[100%] w-[100%] object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col p-4">
        <p className="pb-[0.5rem] text-lg">{menu?.name}</p>
        <span className="text-sm text-[grey]">
          Rs. {menu?.price} for {menu?.qty}
        </span>
        <span className="text-sm text-[grey]">{restaurent}</span>
      </div>
    </div>
  );
};
