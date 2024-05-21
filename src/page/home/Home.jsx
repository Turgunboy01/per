import React, { useState } from "react";
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

const Home = () => {
  const [clickMoon, setClickMoon] = useState(false);
  return (
    <div className={`${clickMoon ? "bg-[#29292b]" : "bg-[#fff]"}`}>
      <Header clickMoon={clickMoon} />
      <div className="pt-[80px]">
        <div
          onClick={() => setClickMoon(!clickMoon)}
          className={`fixed bottom-[100px] left-[50px] w-[60px] h-[30px]  bg-[#434345] px-1 py-1  rounded-full`}
        >
          <span
            className={` rounded-full  bg-yellow-700 w-[20px]  h-[20px] absolute flex justify-center items-center ${
              clickMoon ? "right-1" : "top-1"
            } `}
          >
            {clickMoon ? <FaRegMoon size={15} /> : <CiSun size={20} />}
          </span>
        </div>
        <div className="border-t">
          <div className="w-[90%] border-l ml-auto">
            <KeyState clickMoon={clickMoon} />
            <div className="border-b py-[30px]">
              <marquee
                loop
                scrolldela="0.6s"
                behavior="scroll"
                scrollamount="15"
              >
                <div className="flex justify-between gap-[150px]">
                  {marquee1.map((item, index) => (
                    <img
                      key={index}
                      className="w-[200px]"
                      src={item.img}
                      alt="https://ventionteams.com/media/documents/paypal_RVc4KIP.svg"
                    />
                  ))}
                </div>
              </marquee>
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
            <Expertise clickMoon={clickMoon} />
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
              <marquee
                loop
                scrolldela="0.6s"
                behavior="scroll"
                scrollamount="15"
              >
                <div className="flex justify-between gap-[150px]">
                  {marquee1.map((item, index) => (
                    <img
                      key={index}
                      className="w-[200px]"
                      src={item.img}
                      alt="https://ventionteams.com/media/documents/paypal_RVc4KIP.svg"
                    />
                  ))}
                </div>
              </marquee>
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
              <Contact clickMoon={clickMoon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
