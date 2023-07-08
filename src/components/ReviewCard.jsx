import { UserAvatar } from "./UserAvatar";
import { FiStar } from "react-icons/fi";

export const ReviewCard = ({ rating }) => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex gap-4 items-center">
          <UserAvatar profileImage={rating?.pp} className="h-12 w-12" />
          <span>{rating?.revName ? rating?.revName : "Pranita"}</span>
        </div>
        <p className="py-2">{rating?.comment}</p>
      </div>
      <div>
        <div className="flex justify-center items-center gap-1 py-0.5 px-2 border rounded-md bg-[#479447] text-[yellow]">
          <span>{rating?.rating}</span>
          <span>
            <FiStar />
          </span>
        </div>
      </div>
    </div>
  );
};
