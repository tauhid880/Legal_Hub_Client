import React from "react";
import { useState, useContext } from "react";
import { FcMenu, FcServices, FcMinus, FcBusinessman } from "react-icons/fc";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative z-20">
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-zinc-700 py-4 md:px-8 px-5">
          <div className="font-bold text-2xl cursor-pointer flex items-center px- text-gray-800">
            <FcServices className="text-5xl"></FcServices>
            <h1 className="text-2xl text-white lg:ml-2 ml-1">
              <Link to="/">
                Legal <span className="text-xl text-amber-300">Hub</span>
              </Link>
            </h1>
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <FcMinus></FcMinus> : <FcMenu></FcMenu>}
          </div>
          <ul
            className={`text-white md:flex md:items-center  md:pb-0 pb-5 absolute md:static bg-zinc-700  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-14 opacity-100"
                : "top-[-500px] md:opacity-100 opacity-100 "
            }`}
          >
            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              <Link to="/" className="hover:text-amber-200 duration-500">
                Home
              </Link>
            </li>
            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              {" "}
              <Link
                to="/services"
                className="hover:text-amber-200 duration-500"
              >
                Our Services
              </Link>
            </li>

            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              {" "}
              <Link to="/blog" className="hover:text-amber-200 duration-500">
                Blog
              </Link>
            </li>
            {user?.uid ? (
              <>
                <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
                  {" "}
                  <Link
                    to="/review"
                    className="hover:text-amber-200 duration-500"
                  >
                    My reviews
                  </Link>
                </li>
                <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
                  {" "}
                  <Link
                    to="/blog"
                    className="hover:text-amber-200 duration-500"
                  >
                    Add service
                  </Link>
                </li>
              </>
            ) : (
              <li></li>
            )}
            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              {user?.uid ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="hover:bg-zinc-500 text-black rounded-none duration-500 btn bg-amber-200"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="btn hover:bg-zinc-500 text-black rounded-none duration-500 mr-2 bg-amber-200 shadow-xl"
                  >
                    Log In
                  </Link>
                  <Link
                    to={"/register"}
                    className="btn hover:bg-zinc-500 text-black rounded-none duration-500 bg-amber-200"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </li>

            <li className="md:ml-8 text-lg font-semibold avatar online placeholder">
              <div className="w-12 rounded-full">
                {user?.photoURL ? (
                  <img src={user?.photoURL} alt="" />
                ) : (
                  <FcBusinessman></FcBusinessman>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
