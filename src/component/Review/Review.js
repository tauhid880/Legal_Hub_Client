import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="flex flex-col gap-5 lg:p-10 p-5">
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review}></ReviewCard>
      ))}
      <div className="flex justify-center items-center">
        <textarea
          className="textarea textarea-bordered w-1/2"
          placeholder="Add a Review"
        ></textarea>
        <button className="btn btn-outline text-white ml-5">Submit</button>
      </div>
    </div>
  );
};

export default Review;
