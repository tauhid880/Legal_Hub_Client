import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section>
      <div className="bg-zinc-400">
        <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
          <h1 className="text-5xl my-5 font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
            I practice law since 15 years.
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
            It follow from this that benefits. Among the numerous fault of those
            who pass their there is. Among the neither know how to bestow.
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-gray-800 text-gray-50"
            >
              <Link to="/services">Get started</Link>
            </button>
            <button
              type="button"
              className="px-8 py-3 m-2 text-lg border rounded border-gray-700 text-gray-900"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://media.istockphoto.com/id/609696404/photo/i-dominated-the-business-world.jpg?b=1&s=170667a&w=0&k=20&c=v1r4UXecc2Rvj07iLXCNbym7jTksNXZiWBg1JidMOCU="
        alt=""
        className="lg:w-2/4 w-3/4  mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 "
      />
    </section>
  );
};

export default Hero;
