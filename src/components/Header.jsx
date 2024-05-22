import React, { useContext } from "react";
import { BsArrowDown } from "react-icons/bs";
import { RiGlobalLine } from "react-icons/ri";
import { Logo } from "../../public/Svg";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { clickMoon } = useContext(ThemeContext);
  return (
    <div
      className={` fixed  flex  z-40  ${
        !clickMoon ? "bg-white" : "bg-[#29292b]"
      } w-full border-b justify-between `}
    >
      <div className="flex-[.2] p-6">
        <Logo color={clickMoon ? "#fff" : "#000"} />
      </div>
      <div className="flex-[.613]">
        <div className="flex justify-between gap-5">
          <div className="flex">
            <div
              className={`w-[160px] flex weDo p-6 border-l items-center ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              What we do <BsArrowDown />
              <div className=" fixed w-screen top-[70px]  justify-end left-0 h-screen backdrop-blur-lg hoverDrop1 flex ">
                <div
                  className={` flex-[.6] justify-start  text-left ${
                    !clickMoon ? "bg-white" : "bg-[#29292b]"
                  }`}
                >
                  <div className="">
                    <div className="grid grid-cols-3 gap-10 border-b p-6  pr-[50px]">
                      <h3 className="p-2 font-semibold">Services</h3>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Software devolopment
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Web devolopment
                        </h3>
                      </div>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Mobile app devolopment
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          IT services for startups
                        </h3>
                      </div>
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-10 border-b p-6  pr-[50px]">
                      <h3 className="p-2 font-semibold">Industries</h3>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Fintech
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Healthtech
                        </h3>{" "}
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Edtech
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Gamedev
                        </h3>
                      </div>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Real estate
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Ecommerce
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Marketiing/adtech
                        </h3>
                      </div>
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-10 border-b p-6  pr-[50px] ">
                      <h3 className="p-2 font-semibold">Services</h3>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Expertise
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Cloud
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Blockchain
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Salesforce
                        </h3>
                      </div>
                      <div className="">
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          Internet things
                        </h3>
                        <h3
                          className={` underline m-2 font-semibold cursor-pointer hover:text-[#8873e4] ${
                            clickMoon ? "text-[#fff]" : "text-[#000]"
                          }`}
                        >
                          AI
                        </h3>
                        <h3 className="m-2 underline font-semibold cursor-pointer hover:text-[#8873e4]">
                          Big data
                        </h3>
                        <h3 className="m-2 font-semibold underline cursor-pointer">
                          Cybersecurity
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={`w-[160px] hover:text-[#ff6a47] font-semibold ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Portfolio
            </button>
            <button
              className={`w-[160px] hover:text-[#ff6a47] font-semibold font-semibold ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              Insights
            </button>
            <div
              className={`w-[160px] flex weDo p-6 items-center font-semibold ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              About us <BsArrowDown />
              <div className=" fixed w-screen top-[70px]  justify-end left-0 h-screen backdrop-blur-lg hoverDrop1  flex ">
                <div
                  className={` flex-[.6] justify-start  text-left ${
                    !clickMoon ? "bg-white" : "bg-[#29292b]"
                  } `}
                >
                  <div className="">
                    <div className="grid grid-cols-3 gap-5 border-b p-6  pr-[50px]">
                      <h3 className="p-2 font-semibold">Company</h3>
                      <div className="">
                        <div className="h-[170px]">
                          <h3 className=" underline m-2 cursor-pointer font-semibold hover:text-[#8873e4]">
                            Who we are
                          </h3>
                          <p className="text-[17px] font-semibold mb-8 pl-2">
                            Impact on clients, communities,and our people
                          </p>
                        </div>
                        <div className="">
                          <h3 className=" underline m-2 cursor-pointer font-semibold hover:text-[#8873e4]">
                            How we work
                          </h3>
                          <p className="text-[17px] font-semibold  pl-2">
                            Discover our formula for your success
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <div className="h-[170px]">
                          <h3 className=" underline m-2 cursor-pointer font-semibold hover:text-[#8873e4]">
                            Careers
                          </h3>
                          <p className="text-[17px] font-semibold mb-8 pl-2">
                            Boost your career,boost global innovation
                          </p>
                        </div>
                        <div className="">
                          <h3 className=" underline m-2 cursor-pointer font-semibold hover:text-[#8873e4]">
                            Partnerships
                          </h3>
                          <p className="text-[17px] font-semibold  pl-2">
                            We team up with the top tech to deliver top-tier
                            results
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-5 border-b p-6  pr-[50px]">
                      <h3 className="p-2 font-semibold">Delivery models</h3>
                      <div className="">
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          IT staff augmentation
                        </h3>
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          Dedicated devolopment teams
                        </h3>{" "}
                      </div>
                      <div className="">
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          Software project outsourcing
                        </h3>
                      </div>
                    </div>{" "}
                    <div className="grid grid-cols-3 gap-5 border-b p-6  pr-[50px] ">
                      <h3 className="p-2 font-semibold">Discover more</h3>
                      <div className="">
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          Newsroom
                        </h3>
                      </div>
                      <div className="">
                        <h3 className="m-2 underline cursor-pointer font-semibold hover:text-[#8873e4]">
                          Media kit
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className={`p-6 hover:bg-[#ff6a47] font-semibold  ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              } `}
            >
              Contact us
            </button>
            <div
              className={`p-7 px-10 globus hover:text-[#ff6a47]  relative font-semibold  ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              } `}
            >
              <RiGlobalLine size={25} />
              <div
                className={`absolute border top-[74px] right-0   w-[200px] p-5 flex flex-col gap-2 justify-start items-start ${
                  clickMoon
                    ? "text-[#fff] bg-[#29292b]"
                    : "text-[#000] bg-[#fff]"
                } `}
              >
                <button className="hover:text-[#ff6a47] text-[#ff6a47]">
                  US & WorldWide
                </button>
                <button className="hover:text-[#ff6a47]"> UK</button>
                <button className="hover:text-[#ff6a47]">DACH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
