import React from "react";

const VerticalVideoCard = () => {
  return (
    <div className="w-[280px] h-[300px] rounded-3xl overflow-hidden -z-0">
      <div className="h-[150px] bg-[#D9D9D9] overflow-hidden">
        <div className="absolute bg-[#242730] opacity-80 rounded-md translate-x-[190px] text-[0.8rem] px-2 translate-y-3">
          7 min
        </div>
        <img src="https://images.pexels.com/photos/165236/pexels-photo-165236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
      </div>
      <div className="h-[150px] flex flex-col gap-2 bg-[#252836] py-5 px-6">
        <div className="profileFrame absolute -z-1000 translate-x-[175px] -translate-y-[40px] w-[55px] h-[55px] rounded-full border-[1px] border-white flex justify-center items-center">
          <div className="w-[45px] h-[45px] rounded-full overflow-hidden">
            <img
              src={
                "https://img.freepik.com/premium-vector/cute-baby-boy-profile-picture-kid-avatar_176411-4644.jpg?w=2000"
              }
            ></img>
          </div>
          <div className="absolute w-4 h-4 border-[3px] border-[#252836] bg-white rounded-full translate-x-5 translate-y-5"></div>
        </div>
        <h2 className="font-light text-[#B7B9D2] text-[0.9rem]">
          Andy William
        </h2>
        <p className="font-medium">
          Basic how to ride your skateboard comfortly
        </p>
        <p className="text-[#808191] text-[0.8rem]">53K views • 2 weeks ago</p>
      </div>
    </div>
  );
};

export default VerticalVideoCard;
