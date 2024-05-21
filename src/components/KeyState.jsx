import React from "react";

const KeyState = ({ clickMoon }) => {
  return (
    <div>
      <div className="pt-[150px] border-b pb-[70px] px-[30px]">
        <h1
          className={`text-[45px] font-semibold ${
            !clickMoon ? "text-[#000]" : "text-[#fff]"
          }`}
        >
          With 20+ years of providing software development services for
          technological enterprises, successful startups, and AI-empowered
          companies worldwide, our developers demonstrate exceptional efficiency
          and expertise.
        </h1>
        <p
          className={`text-[20px] w-[43%] pt-4 ml-auto ${
            !clickMoon ? "text-[#000]" : "text-[#fff]"
          }`}
        >
          On average, Vention clients benefit $600,000+ from annual savings as a
          result of our collaboration.
        </p>
      </div>
      <div className=" border-b grid grid-cols-2 ">
        <div className="">
          <div className="h-[200px] px-[30px] py-[43px]">
            <h1
              className={`text-[23px]  font-semibold ${
                !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
              }`}
            >
              Key stats
            </h1>
          </div>
          <div className="flex">
            <div className="px-[30px] py-[43px]">
              <h1
                className={`text-[85px]  ${
                  !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
                } font-light`}
              >
                36
              </h1>
              <p
                className={`text-[19px] ${
                  clickMoon ? "text-[#fff]" : "text-[#000]"
                }`}
              >
                month average engagement
              </p>
            </div>
            <div className="px-[30px] py-[43px]">
              <h1
                className={`text-[85px]  ${
                  !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
                } font-light`}
              >
                20+
              </h1>
              <p
                className={`text-[19px] ${
                  clickMoon ? "text-[#fff]" : "text-[#000]"
                }`}
              >
                client IPOs supported
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="px-[30px] py-[43px]">
            <h1
              className={`text-[85px]  ${
                !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
              } font-light`}
            >
              500+
            </h1>
            <p
              className={`text-[19px] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              award-winning clients
            </p>
          </div>
          <div className="px-[30px] py-[43px]">
            <h1
              className={`text-[85px]  ${
                !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
              } font-light`}
            >
              $15B+
            </h1>
            <p
              className={`text-[19px] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              client IPOs supported
            </p>
          </div>
          <div className="px-[30px] py-[43px]">
            <h1
              className={`text-[85px]  ${
                !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
              } font-light`}
            >
              20+
            </h1>
            <p
              className={`text-[19px] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              years of experience
            </p>
          </div>
          <div className="px-[30px] py-[43px]">
            <h1
              className={`text-[85px]  ${
                !clickMoon ? "text-[#52002D]" : "text-[#ff977e]"
              } font-light`}
            >
              3K+
            </h1>
            <p
              className={`text-[19px] ${
                clickMoon ? "text-[#fff]" : "text-[#000]"
              }`}
            >
              world-class engineers
            </p>
          </div>
        </div>
      </div>
      <div className="border-b pt-[160px] pb-[43px] px-[30px] ">
        <h1
          className={`text-[43px] font-semibold ${
            clickMoon ? "text-[#fff]" : "text-[#000]"
          }`}
        >
          Trusted by the best
        </h1>
        <p
          className={`text-[20px] mt-4" ${
            clickMoon ? "text-[#fff]" : "text-[#000]"
          } `}
        >
          Companies ranging from early-stage startups to Fortune 500 enterprises
          partner with us to develop game-changing growth solutions.
        </p>
      </div>
    </div>
  );
};

export default KeyState;
