import React from "react";
import { PiDownloadSimpleBold } from "react-icons/pi";

const Contact = ({ clickMoon }) => {
  return (
    <div className="flex">
      <div className="border-r w-[70%]  ">
        <h1
          className={`pb-[30px] px-[30px] pt-[160px]  text-[40px] font-bold} ${
            clickMoon ? "text-[#fff]" : "text-[#000]"
          }`}
        >
          Contact us
        </h1>
        <div className="grid grid-cols-2">
          <input
            type="text"
            placeholder="Full name"
            className="text-[#fff] outline-none bg-transparent border-t px-8 py-5"
          />
          <input
            type="text"
            placeholder="Work email"
            className="text-[#fff] outline-none bg-transparent border-l border-t px-8 py-5"
          />
          <input
            type="text"
            placeholder="Phone (optional)"
            className="text-[#fff] outline-none  bg-transparent border-l border-t px-8 py-5 "
          />
          <label
            htmlFor="file"
            className="text-[#fff] flex justify-between items-center outline-none bg-transparent border-l border-t px-8 py-5"
          >
            <span className="text-[grey]">
              Upload file (max file size is 30MB)
            </span>
            <PiDownloadSimpleBold size={25} color="grey" />
          </label>
          <input
            type="file"
            id="file"
            className="text-[] hidden outline-none bg-transparent border-l border-t px-8 py-5"
          />
        </div>
        <textarea
          className="text-[#fff] outline-none bg-transparent border-t px-8 py-5 w-full"
          placeholder="How can we help you?"
        ></textarea>
      </div>
      <div className="w-[30%] flex items-end">
        <button className="w-full bg-[blue] text-[#fff] py-[60px] hover:bg-[#364674] hover:text-[#222] font-bold text-[20px]">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
