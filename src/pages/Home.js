import React from "react";
import { VerticalVideoCard } from "../components";

const Home = () => {
  return (
    <div className="ml-7 mr-10 pb-[3rem]">
      <h2 className="font-normal text-[1.5rem] mb-2">Explore</h2>
      <div className="heroPoster flex gap-7">
        <div className="w-[60%] rounded-3xl bg-[#0DABBD]">
          <div className="left flex flex-col w-[50%] px-10 py-5 items-start gap-5">
            <h2 className="text-[2rem] leading-snug font-semibold">
              How to do Basic Jumping and how to landing safely
            </h2>
            <div className="profileCard flex justify-center items-center gap-2">
              <div className="profileFrame w-[55px] h-[55px] rounded-full border-[1px] border-white flex justify-center items-center">
                <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
                  <img
                    src={
                      "https://img.freepik.com/premium-vector/cute-baby-boy-profile-picture-kid-avatar_176411-4644.jpg?w=2000"
                    }
                  ></img>
                </div>
                <div className="absolute w-4 h-4 border-[3px] -z-1000 border-[#0DABBD] bg-white rounded-full translate-x-5 translate-y-5"></div>
              </div>
              <div>
                <h2 className="">Thomas Hope</h2>
                <p className="font-light text-[0.8rem]">
                  53K views • 2 weeks ago
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-[40%] rounded-3xl p-10 bg-[#E99353]">
          <div className="w-32 h-32 bg-white rounded-xl"></div>
        </div>
      </div>
      <div className="videoCardSection mt-3 -z-10">
        <h2 className="font-normal text-[1.5rem] mb-2">Most Watched</h2>
        <div className="cardContainer flex flex-wrap gap-5">
          <VerticalVideoCard />
          <VerticalVideoCard />
          <VerticalVideoCard />
          <VerticalVideoCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
