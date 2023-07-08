import { useNavigate, useParams } from "react-router-dom";
import { useCuisine } from "../contexts/cuisineContext";
import { ReviewCard } from "../components/ReviewCard";
import { BsArrowLeft } from "react-icons/bs";
import { useState } from "react";

export const SingleRestaurent = () => {
  const navigate = useNavigate();
  const { restaurentId } = useParams();
  const {
    state: { restaurentList },
  } = useCuisine();

  const [showReviewForm, setShowReviewForm] = useState(false);

  const restaurent = restaurentList?.find(
    (item) => item?.id === parseInt(restaurentId)
  );

  const allMenus = restaurent?.menu?.map((item) => item?.name);

  return (
    <div className="p-4">
      <div className="mt-6 ml-6">
        <span className="rounded" onClick={() => navigate(-1)}>
          <BsArrowLeft className="hover: cursor-pointer hover:scale-125 text-xl" />
        </span>
      </div>
      <div className="mx-8 py-4 px-[6rem]">
        <h1 className="text-[2.5rem] py-2">{restaurent?.name}</h1>
        <div className="flex justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm text-[grey]">{allMenus.join(", ")}</span>
            <span className="text-sm text-[grey]">{restaurent?.address}</span>
            <span className="text-sm text-[grey]">
              Average Rating: {restaurent?.averageRating}
            </span>
          </div>
          <div>
            <button className="border py-2 px-4 rounded bg-[#f87171] text-[white] hover:scale-105">
              Add Review
            </button>
          </div>
        </div>
        <hr className="mt-8" />
        <p className="text-2xl font-semibold py-6">Reviews</p>
        <div className="flex flex-col gap-4">
          {restaurent?.ratings?.map((rating, index) => (
            <ReviewCard key={index} rating={rating} />
          ))}
        </div>
      </div>
    </div>
  );
};
