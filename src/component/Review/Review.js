import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewCard from "./ReviewCard";

const Review = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = user?.email || "unregistered";
    const comment = form.comment.value;
    const photoURL = form.photoURL.value;
    const rating = form.rating.value;
    const { _id } = reviews;

    const review = {
      id: _id,
      userName: name,
      email,
      comment: comment,
      img: photoURL,
      rating: rating,
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("Thanks for your review");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex flex-col justify-center items-center gap-5 lg:p-10 p-5">
      <h1 className="text-gray-300 lg:text-3xl text-2xl font-bold">
        What our customers are saying about us...
      </h1>
      {reviews.map((review) => (
        <ReviewCard key={review._id} review={review}></ReviewCard>
      ))}
      <div className="flex justify-center items-center w-2/3 ">
        {user?.uid ? (
          <>
            <form onSubmit={handleReview} className="flex flex-col w-full">
              <h1 className="text-gray-300 lg:text-3xl text-2xl font-bold my-3">
                Please give us your feedback!
              </h1>

              <div className="">
                <label className="label-text text-gray-200">Your name</label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="my-5">
                <label className="label-text text-gray-200">Your Image</label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Image"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="my-5">
                <label className="label-text text-gray-200">
                  Give us from 1 to 5
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="my-5">
                <label className="label-text text-gray-200">Your Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered  w-full"
                  defaultValue={user?.email}
                  readOnly
                />
              </div>
              <textarea
                className="textarea textarea-bordered my-5 "
                placeholder="Add a Review"
                name="comment"
              ></textarea>
              <button className="btn btn-success btn-outline normal-case">
                <p className="text-white">Submit</p>
              </button>
            </form>
          </>
        ) : (
          <>
            <Link to="/login">
              <div className="shadow-2xl bg-gray-700">
                <h1 className="lg:text-3xl text-xl font-bold text-red-300 p-5">
                  Please login to add a review
                </h1>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Review;
