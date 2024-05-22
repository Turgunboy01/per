import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Expertise = () => {
  const { clickMoon } = useContext(ThemeContext);
  return (
    <>
      <div className="border-b p-[30px] pt-[60px] pb-[43px]  grid grid-cols-2">
        <h1
          className={`text-[23px]  font-semibold ${
            !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
          }`}
        >
          {" "}
          Expertise
        </h1>
        <div className="grid grid-cols-2">
          <div className="">
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Softwere devolopment
            </h3>
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Web devolopment
            </h3>
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Mobile devolopment
            </h3>{" "}
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Startup services
            </h3>{" "}
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Cloud services
            </h3>
          </div>
          <div className="">
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Blockchain
            </h3>
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              AR/VR
            </h3>
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Salesforce
            </h3>{" "}
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Artificial intelligence
            </h3>{" "}
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Internet of things
            </h3>
          </div>
        </div>
      </div>
      <div className="border-b p-[30px] pt-[60px] pb-[43px] grid grid-cols-2">
        <h1
          className={`text-[23px]  font-semibold ${
            !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
          }`}
        >
          Industries
        </h1>
        <div className="grid grid-cols-2">
          <div className="">
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Fintech
            </h3>
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Healthtech
            </h3>
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Edtech
            </h3>{" "}
          </div>
          <div className="">
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Ecommerce
            </h3>
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Real estate
            </h3>
            <h3
              className={`m-3 underline font-semibold cursor-pointer text-[25px] hover:text-[#8873e4] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Marketing/Adtech
            </h3>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
