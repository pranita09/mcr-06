import { RxCrossCircled } from "react-icons/rx";
import { useCuisine } from "../contexts/cuisineContext";
import { useState } from "react";

export const ReviewModal = ({ setShowReviewForm, restaurentId }) => {
  const { dispatch } = useCuisine();

  const [reviewDetails, setReviewDetails] = useState({
    rating: "",
    comment: "",
  });

  const submitReviewHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        restaurentId: restaurentId,
        ratingData: { ...reviewDetails, rvName: "Pranita" },
      },
    });
    setReviewDetails({
      rating: null,
      comment: "",
    });
    setShowReviewForm(false);
  };

  return (
    <div className=" bg-[#f7637b] py-4 px-4 rounded w-[25rem] text-[white]">
      <div className="my-2" onClick={() => setShowReviewForm(false)}>
        <RxCrossCircled className="text-2xl hover:cursor-pointer hover:scale-105" />
      </div>
      <h1 className="text-2xl text-center">Add Review</h1>
      <hr className="my-3" />
      <form
        className="py-4 px-4 flex flex-col gap-4"
        onSubmit={submitReviewHandler}
      >
        <label className="flex justify-between items-center">
          <span>Rating:</span>
          <select
            className="text-[black] w-[5rem] rounded text-center"
            value={reviewDetails?.rating}
            onChange={(e) =>
              setReviewDetails({ ...reviewDetails, rating: e.target.value })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>
        <label className="flex items-center justify-between">
          <span>Comment:</span>
          <textarea
            className="text-[black] w-[5rem] rounded"
            cols={25}
            rows={5}
            value={reviewDetails?.comment}
            onChange={(e) =>
              setReviewDetails({ ...reviewDetails, comment: e.target.value })
            }
          ></textarea>
        </label>
        <div className="flex justify-center items-center pt-2">
          <button
            type="submit"
            className="border py-1 px-4 rounded bg-[white] text-[black] hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
