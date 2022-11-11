import React from "react";
import Lottie from "lottie-react";
import Animation from "../../../assets/contact-us.json";

const ContactUs = () => {
  return (
    <div className="grid w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto  md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-500 text-gray-100">
      <div className="flex flex-col justify-evenly items-center">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div className="text-gray-400">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <div className="">
          <Lottie animationData={Animation} loop={true}></Lottie>
        </div>
      </div>
      <form className="space-y-6 ">
        <div>
          <label className="text-sm">Full name</label>
          <input
            id="name"
            type="text"
            placeholder=""
            className="w-full p-3 rounded mt-2"
          />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input id="email" type="email" className="w-full p-3 rounded mt-2" />
        </div>
        <div>
          <label className="text-sm">Message</label>
          <textarea
            id="message"
            rows="3"
            className="w-full p-3 rounded mt-2"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
