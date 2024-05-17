import { MoreHoriz, Science, Apps } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";
import AvatarComponents from "./AvatarComponents";
import AppsComponents from "./AppsComponents";
import { appData } from "../data";

const Header = () => {
  const [app, setApp] = useState(false);
  const [avatar, setAvatar] = useState(false);
  const handleApp = () => {
    setApp(!app);
    setAvatar(false);
  };
  const handleAvatar = () => {
    setApp(false);
    setAvatar(!avatar);
  };
  return (
    <div className=" flex relative justify-end gap-3 items-center p-[20px]">
      <a
        href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
        className="text-[#fff]  hover:underline"
      >
        Gmail
      </a>
      <a
        href="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl"
        className="text-[#fff] hover:underline"
      >
        Images
      </a>
      <a href="https://labs.google.com/search?source=ntp&authuser=0">
        <IconButton>
          <Science sx={{ color: "#fff" }} />
        </IconButton>
      </a>
      <div className="">
        <IconButton onClick={handleApp}>
          <Apps sx={{ color: "#fff" }} />
        </IconButton>
        {app && (
          <div className="w-[370px] absolute right-4 top-[90px] h-[470px] overflow-y-scroll p-4 rounded-3xl bg-slate-100">
            <div className="bg-[#fff] h-full p-3 rounded-lg flex flex-wrap justify-between">
              {appData.map((item, index) => (
                <AppsComponents img={item.img} title={item.name} />
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="">
        <IconButton onClick={handleAvatar}>
          <Avatar />
        </IconButton>
        {avatar && (
          <div className="w-[370px] absolute right-8 top-[90px]  rounded-3xl bg-white">
            <AvatarComponents setAvatar={setAvatar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
