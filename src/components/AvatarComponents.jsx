import { Add, Close, ExpandMore, Logout } from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React, { useState } from "react";

const AvatarComponents = ({ setAvatar }) => {
  const [click, setClick] = useState(false);
  return (
    <div className="p-6 relative bg-slate-100 h-full rounded-[20px] ">
      <IconButton
        sx={{ position: "absolute", right: "10px", top: "15px" }}
        onClick={() => setAvatar(false)}
      >
        <Close />
      </IconButton>
      <h2 className="text-center">turgunboy2001.10.05@gmail.com</h2>
      <div className="flex justify-center items-center flex-col mt-5">
        <Avatar
          src="https://shorturl.at/fHy14"
          sx={{ width: "80px", height: "80px" }}
        />
        <h3 className=" font-medium mt-[10px] text-[20px] ">Hi,Turgunboy</h3>
        <button className="border rounded-full px-7 py-3 text-[15px] border-[#333] mt-4 hover:bg-[#0000ff18] text-[blue]">
          Manage your Google Account
        </button>
      </div>
      <div className="">
        <div
          onClick={() => setClick(!click)}
          className={`w-[full] bg-[#fff] hover:bg-[#e0e0e0f5] cursor-pointer rounded-t-[20px] ${
            !click && "rounded-b-[20px]"
          }   mt-5 p-[20px]`}
        >
          <div className="flex justify-between">
            <h2 className="text-[15px]">Hide more accounts</h2>
            {/* <IconButton> */}

            <ExpandMore
              sx={{ bgcolor: "#eee", borderRadius: "50%" }}
              className={`${click ? "rotate-[180deg]" : "rotate-[0]"}`}
              //   style={{}}
            />
            {/* </IconButton> */}
          </div>
        </div>
        {click && (
          <>
            <div className="w-[full] bg-[#fff] hover:bg-[#e0e0e0f5] border-t border-t-slate-100 border-t-[2px]   p-[20px]">
              <div className="flex items-center gap-2">
                <Avatar />
                <div className="">
                  <h2>Turgunboy Makhmudjonov</h2>
                  <p className="text-[12px]">turgunboy2001.10.05@gmail.com</p>
                </div>
              </div>
            </div>{" "}
            <div className="w-[full] bg-[#fff] hover:bg-[#e0e0e0f5] border-t border-t-slate-100 border-t-[2px]   p-[20px]">
              <div className="flex items-center gap-2">
                <Avatar />
                <div className="">
                  <h2>Turgunboy Makhmudjonov</h2>
                  <p className="text-[12px]">turgunboy2001.10.05@gmail.com</p>
                </div>
              </div>
            </div>{" "}
            <div className="w-[full] bg-[#fff] hover:bg-[#e0e0e0f5] border-t border-t-slate-100 border-t-[2px]  p-[20px]">
              <div className="flex items-center gap-2">
                <Add />
                <h2>Sign out all accounts</h2>
              </div>
            </div>
            <div className="w-[full] bg-[#fff] hover:bg-[#e0e0e0f5] border-t border-t-slate-100 border-t-[2px] rounded-b-[20px]  p-[20px]">
              <div className="flex items-center gap-2">
                <Logout />
                <h2>Sign out all accounts</h2>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="flex justify-center items-center mt-2">
        <p className="text-[12px]">Privacy Policy </p>-
        <p className=" text-[12px]"> Terms of Service</p>
      </div>
    </div>
  );
};

export default AvatarComponents;
