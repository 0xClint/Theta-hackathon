import React from "react";
import ConnectWallet from "./ConnectWallet";
import {
  GalleryIcon,
  NotificationIcon,
  SearchIcon,
  UploadIcon,
} from "../assets";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-5 pl-7 pr-14 w-[100%]">
      <div className="w-[50%]">
        <div className="flex bg-[#353340] rounded-[11px] w-[100%] px-4 py-1 justify-between">
          <input className=" bg-[#353340] w-[70%]"></input>
          <SearchIcon className="w-5 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
        </div>
      </div>
      <div className="flex gap-8">
        <GalleryIcon className="w-5 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
        <UploadIcon className="w-5 h-9  hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
        <NotificationIcon className="w-5 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
      </div>
    </div>
  );
};

export default Header;
