import { MoreHoriz, MoreVert } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";

const IconsCard = ({ title, img }) => {
  const [cardClick, setCardClick] = useState(false);
  return (
    <div className="flex flex-col w-[112px] p-[10px] hover:bg-[#eeeeee1f] justify-center items-center  rounded-xl relative iconsCard">
      <div className=" absolute right-0 top-0 hidden transition-all btnDiv ">
        <IconButton onClick={() => setCardClick(true)}>
          <MoreVert sx={{ color: "#fff" }} />
        </IconButton>
      </div>
      {cardClick && (
        <div className="absolute w-[120px] py-3   bg-[#fff] flex flex-col justify-start gap-2 ">
          <button className="px-2 py-1 hover:bg-[#eee] w-full text-left pl-7 text-[14px]">
            Edit shortcut
          </button>
          <button className="px-2 py-1 hover:bg-[#eee] w-full text-left pl-7 text-[14px]">
            Remove
          </button>
        </div>
      )}
      <img
        src={img}
        alt=""
        className="w-[50px] h-[50px]  rounded-full object-contain"
      />
      <h2 className="mt-1 text-center text-[#fff]">{title}</h2>
    </div>
  );
};

export default IconsCard;
