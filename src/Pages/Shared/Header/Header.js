import React from "react";
import { useState } from "react";
import { FcMenu, FcServices, FcMinus } from "react-icons/fc";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="relative z-20">
      <div className="shadow-md w-full fixed top-0 left-0 ">
        <div className="md:flex items-center justify-between bg-zinc-700 py-4 md:px-8 px-5">
          <div className="font-bold text-2xl cursor-pointer flex items-center px- text-gray-800">
            <FcServices className="text-5xl"></FcServices>
            <h1 className="text-2xl text-white lg:ml-2 ml-1">
              Legal <span className="text-xl text-amber-300">Hub</span>
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
              <Link to="/" className="hover:text-orange-300 duration-500">
                Home
              </Link>
            </li>
            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              {" "}
              <Link
                to="/services"
                className="hover:text-orange-300 duration-500"
              >
                Our Services
              </Link>
            </li>
            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              {" "}
              <Link to="/" className="hover:text-orange-300 duration-500">
                About Us
              </Link>
            </li>
            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              {" "}
              <Link to="/blog" className="hover:text-orange-300 duration-500">
                Blog
              </Link>
            </li>
            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              {" "}
              <Link to="/login" className="hover:text-orange-300 duration-500">
                LogIn
              </Link>
            </li>
            <li className="md:ml-8 text-lg font-semibold md:my-0 my-5">
              {" "}
              <Link
                to="/register"
                className="hover:text-orange-300 duration-500"
              >
                Register
              </Link>
            </li>
            <li className="md:ml-8 text-lg font-semibold avatar online placeholder">
              <div className="w-12 rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
