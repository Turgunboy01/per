import React from "react";

import SearchBar from "../../components/SearchBar";
import IconsCard from "../../components/IconsCard";
import { appData } from "../../data";
const Home = () => {
  return (
    <div className=" flex items-center flex-col">
      <h1 className="text-[100px] font-semibold  text-[#fff] mb-4">Google</h1>
      <SearchBar />
      <div className="w-[500px] grid grid-cols-5  gap-[20px] mt-[50px]">
        {appData.slice(1, 11).map((item) => (
          <IconsCard img={item.img} title={item.name} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Home;
