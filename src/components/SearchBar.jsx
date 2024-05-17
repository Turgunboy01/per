import React from "react";
import { IconButton } from "@mui/material";
import { Mic, Search } from "@mui/icons-material";
import mic from "../../public/mic.png";
import camera from "../../public/camera.png";
// import camera from "../../../public/camera.png";

const SearchBar = () => {
  return (
    <div className=" w-[565px] bg-[#fff] rounded-full px-2 py-2 gap-3 flex items-center">
      <IconButton>
        <Search />
      </IconButton>
      <input
        type="text"
        className="w-full outline-none border-0"
        placeholder="Search Google or type a URL"
      />
      <IconButton>
        {/* <Mic /> */}
        <img src={mic} alt="" className="w-[15px]" />
      </IconButton>{" "}
      <IconButton>
        {/* <Mic /> */}
        <img src={camera} alt="" className="w-[20px]" />
      </IconButton>
    </div>
  );
};

export default SearchBar;
