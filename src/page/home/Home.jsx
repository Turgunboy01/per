import React, { createContext, useContext, useState } from "react";
import Header from "../../components/Header";
import KeyState from "../../components/KeyState";
import Expertise from "../../components/Expertise";
import Slider from "../../components/Slider";
import Video from "../../components/Video";
import VentionImg from "../../components/VentionImg";
import { marquee1 } from "../../../data";
import { CiSun } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa";
import Contact from "../../components/Contact";
import {
  Best1,
  Best10,
  Best11,
  Best12,
  Best13,
  Best14,
  Best2,
  Best3,
  Best4,
  Best5,
  Best6,
  Best7,
  Best8,
  Best9,
} from "../../../public/Svg";
import Marquee from "react-fast-marquee";
import { ThemeContext } from "../../context/ThemeContext";

const Home = () => {
  const { clickMoon, setClickMoon } = useContext(ThemeContext);

  return (
    <div className={`${clickMoon ? "bg-[#29292b]" : "bg-[#fff]"}`}>
      <Header />
      <div className="pt-[80px]">
        <div
          onClick={() => setClickMoon(!clickMoon)}
          className={`fixed bottom-[100px] left-[50px] w-[60px] h-[30px]  bg-[#434345] px-1 py-1  rounded-full`}
        >
          <span
            className={` rounded-full  bg-yellow-700 w-[25px]  h-[25px] absolute flex justify-center items-center ${
              clickMoon ? "right-1" : "top-1"
            } `}
          >
            {clickMoon ? <FaRegMoon size={20} /> : <CiSun size={30} />}
          </span>
        </div>
        <div className="border-t">
          <div className="w-[90%] border-l ml-auto">
            <KeyState />
            <div className="border-b py-[30px] w-full">
              <Marquee>
                <div className=" flex items-center gap-[150px]">
                  <div className="w-[300px]">
                    <Best1 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best2 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best3 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best4 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best5 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best6 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best7 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best8 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best9 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best11 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best12 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best13 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                </div>
              </Marquee>
            </div>
            <div className="flex justify-end p-[90px]  pt-[150px]  border-b items-end">
              <div className="w-[50%]">
                <h2
                  className={`text-[23px]  font-semibold ${
                    !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
                  }`}
                >
                  We speak your language
                </h2>
                <h1
                  className={`text-[50px] ${
                    !clickMoon ? "text-[#000]" : "text-[#fff]"
                  } pb-5 font-semibold`}
                >
                  Wondering how well we know your industry? Curious which tech
                  stacks we support?
                </h1>
                <p
                  className={`text-[19px] font-normal ${
                    !clickMoon ? "text-[#000]" : "text-[#fff]"
                  }`}
                >
                  Spanning 30+ verticals and 25+ technologies, our team has
                  designed and implemented innovative solutions to suit even the
                  most unique needs.
                </p>
              </div>
            </div>
            <Expertise />
            {/* slider */}
            <Slider />
            <div className="flex justify-end p-[90px]  pt-[150px]  border-b items-end">
              <div className="w-[50%]">
                <h1
                  className={`text-[43px] font-semibold ${
                    clickMoon ? "text-[#fff]" : "text-[#000]"
                  }`}
                >
                  Discover Vention in action
                </h1>
                <p
                  className={`text-[20px] mt-4 ${
                    clickMoon ? "text-[#fff]" : "text-[#000]"
                  }`}
                >
                  See firsthand what sets us apart — and how our approach has
                  translated into exponential growth for our clients worldwide.
                  Hit play to begin your journey with us.
                </p>
              </div>
            </div>
            <Video />

            {/* partnyorship */}
            <div className="border-b pt-[160px] pb-[43px] px-[30px] ">
              <h1
                className={`text-[43px] font-semibold ${
                  clickMoon ? "text-[#fff]" : "text-[#000]"
                }`}
              >
                Partnerships
              </h1>
              <p
                className={`text-[20px] mt-4 ${
                  clickMoon ? "text-[#fff]" : "text-[#000]"
                }`}
              >
                Our network includes the world’s top tech leaders, ensuring that
                our developers always have access to cutting-edge technologies
                and products.
              </p>
            </div>

            <div className="border-b py-[30px]">
              <Marquee>
                <div className=" flex items-center gap-[150px]">
                  <div className="w-[300px]">
                    <Best1 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best2 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best3 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best4 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best5 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best6 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best7 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best8 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best9 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best11 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best12 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                  <div className="w-[200px]">
                    <Best13 best={clickMoon ? "#fff" : "#000"} />
                  </div>
                </div>
              </Marquee>
            </div>

            {/* Recognized */}

            <div className="border-b pt-[160px] pb-[43px] px-[30px] ">
              <h1
                className={`text-[43px] font-semibold ${
                  clickMoon ? "text-[#fff]" : "text-[#000]"
                }`}
              >
                Recognized as a leader by those in the know
              </h1>
              <p
                className={`text-[20px] mt-4 ${
                  clickMoon ? "text-[#fff]" : "text-[#000]"
                }`}
              >
                Year after year, Vention has been counted among best-in-class
                companies by the industry’s most respected institutions.
              </p>
            </div>
            <VentionImg />
            <div className="border-b  ">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
