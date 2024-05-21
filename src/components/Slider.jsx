import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
  return (
    <div className=" px-[30px] border-b bg-[#ff6fff]">
      <Carousel>
        <div className="flex py-[105px]  justify-items-start relative">
          <div className="w-[30%] flex flex-col gap-4 items-start">
            <img src="https://shorturl.at/YxyF1" />
            <h1 className="text-[22px] font-semibold">Benjamin Maisano</h1>
            <span>CTO at Mount Sinai</span>
          </div>
          <div className="text-start w-[70%]">
            <h1 className="text-[55px] font-semibold">
              "Vention has provided very talented engineers across web Ul,
              mobile, backend APIs, and system designs, to data integrations and
              beyond.
            </h1>
            <p className="text-[22px] pt-[100px]">
              Their staff integrated quickly and were dedicated to the internal
              teams throughout the relationship, acting as long term partners in
              our strategic digital efforts."
            </p>
          </div>
        </div>
        <div className="flex py-[105px]  justify-items-start">
          <div className="w-[30%] flex flex-col gap-4 items-start">
            <img src="https://shorter.me/53Z6W" />
            <h1 className="text-[22px] font-semibold">Guy Blachman</h1>
            <span>Executive Chairman of Carson Living</span>
          </div>
          <div className="text-start w-[70%]">
            <h1 className="text-[55px] font-semibold">
              "The service they provide is outstanding; they're excellent
              engineers who know all the tools and deliver consistent quality.
            </h1>
            <p className="text-[22px] pt-[100px]">
              When we wanted to add a QA person, they had a great resume for us
              the next day. They're good employees, they show up for work on
              time, and they go the extra mile if needed. We treat them as an
              integral part of our organization."
            </p>
          </div>
        </div>
        <div className="flex py-[105px]  justify-items-start">
          <div className="w-[30%] flex flex-col gap-4 items-start">
            <img src="https://shorter.me/FJm5-" />
            <h1 className="text-[22px] font-semibold">Sean Grundy</h1>
            <span>CTO at Bevi </span>
          </div>
          <div className="text-start w-[70%]">
            <h1 className="text-[55px] font-semibold">
              "As an loT company, we've been impressed at how effectively
              Vention has been able to help us from afar.
            </h1>
            <p className="text-[22px] pt-[100px]">
              They are clear and comprehensive when it comes to project
              planning, budgeting, collecting user feedback, and revising their
              work."
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
