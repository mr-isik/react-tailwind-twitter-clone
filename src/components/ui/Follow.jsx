import React from "react";

const Follow = () => {
  return (
    <a href="/" className="flex justify-between w-full transition hover:bg-gray-extralight py-3 px-5">

      {/* Left */}
      <div className="flex gap-x-4 items-center">
        {/* Profile */}
        <img
          src="https://pbs.twimg.com/profile_images/1385252351079067649/D-efGzjw_400x400.jpg"
          alt="AA Canlı"
          className="w-10 h-10 rounded-full"
        />

        {/* Text */}
        <div className="flex flex-col">
          <h5 className="text-black font-bold text-sm">AA Canlı</h5>
          <p className="text-gray-base font-medium text-sm">@AACanli</p>
        </div>
      </div>

      {/* Right */}
      <a href="/" className="bg-black text-white px-5 leading-none rounded-full hover:bg-opacity-90 transition text-xs flex items-center font-semibold">Follow</a>
    </a>
  );
};

export default Follow;
