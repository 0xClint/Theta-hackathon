import React from "react";
import {
  ExploreIcon,
  TrendingIcon,
  SubscribeIcon,
  LibraryIcon,
  HistoryIcon,
  HeartIcon,
  SettingIcon,
  FeedbackIcon,
} from "../assets/index";

const Sidebar = () => {
  return (
    <div className="w-64 fixed h-screen flex flex-col items-start px-4 text-[0.9rem] border-r-[1px] border-r-[#434343]">
      <h2 className="text-[1.8rem] font-semibold my-3">LogoName</h2>
      <ul className="flex  flex-col gap-4 mt-6 w-[100%]">
        <li className="flex gap-4 items-center py-1 pl-3 rounded-xl cursor-pointer hover:bg-[#252836]">
          <ExploreIcon className="w-5 h-9  hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
          Explore
        </li>
        <li className="flex gap-4 items-center py-1 pl-3 rounded-xl cursor-pointer hover:bg-[#252836]">
          <TrendingIcon className="w-4 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
          Trending
        </li>
        <li className="flex gap-4 items-center py-1 pl-3 rounded-xl cursor-pointer hover:bg-[#252836]">
          <SubscribeIcon className="w-5 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
          Subscription
        </li>
        <li className="flex gap-4 items-center py-1 pl-3 rounded-xl cursor-pointer hover:bg-[#252836]">
          <LibraryIcon className="w-5 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
          Library
        </li>
        <li className="flex gap-4 items-center py-1 pl-3 rounded-xl cursor-pointer hover:bg-[#252836]">
          <HistoryIcon className="w-5 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
          History
        </li>
        <li className="flex gap-4 items-center py-1 pl-3 rounded-xl cursor-pointer hover:bg-[#252836]">
          <HeartIcon className="w-5 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
          Liked Videos
        </li>
        <li className="flex gap-4 items-center py-1 pl-3 rounded-xl cursor-pointer hover:bg-[#252836]">
          <SettingIcon className="w-5 h-9 hover:scale-110 hover:rotate-3 duration-80 ease-in hover:ease-in" />
          Setting
        </li>
        <li className="flex gap-4 items-center py-1 pl-3 rounded-xl cursor-pointer hover:bg-[#252836]">
          <FeedbackIcon className="w-5 h-9" />
          Send Feedback
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
