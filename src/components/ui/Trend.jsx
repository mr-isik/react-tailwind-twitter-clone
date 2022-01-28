import React from "react";

/* Icons */
import { BiDotsHorizontalRounded as DotsIcon } from "react-icons/bi";

const Trend = () => {
  return (
    <a
      href="/"
      className="flex justify-between w-full transition hover:bg-gray-extralight py-3 px-5"
    >
      {/* Left */}
      <div className="flex flex-col">
        <span className="text-xs text-gray-base">Trending in Turkey</span>
        <h6 className="font-semibold text-black text-md">#FrontEnd</h6>
        <span className="text-xs text-gray-base">3,314 Tweets</span>
      </div>

      {/* Right */}
      <div className="flex items-center text-gray-base justify-center rounded-full h-8 w-8 transition hover:bg-primary-base hover:bg-opacity-10 hover:text-primary-base">
        <DotsIcon size={24} />
      </div>
    </a>
  );
};

export default Trend;
