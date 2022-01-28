import React from "react";

/* Icons */
import { FiSettings as SettingsIcon } from "react-icons/fi";

/* Components */
import Trend from "./ui/Trend";

const Trends = () => {
  return (
    <div className="bg-gray-base bg-opacity-5 rounded-xl">
      
      {/* Header */}
      <div className="flex justify-between items-center py-2 px-4">
        {/* Title */}
        <h2 className="font-black text-black text-lg">Trends for you</h2>

        {/* Settings */}
        <div className="p-3 rounded-full hover:bg-gray-extralight transition cursor-pointer">
          <SettingsIcon />
        </div>
      </div>

      {/* Body */}
      <Trend />
      <Trend />
      <Trend />
      <Trend />
      <Trend />

      {/* Footer */}
      <a href="/" className="block text-sm text-primary-base transition hover:bg-gray-extralight w-full py-4 px-4 rounded-b-xl">
          Show More
      </a>
    </div>
  );
};

export default Trends;
