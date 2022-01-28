import React from "react";

/* Components */
import Follow from "./ui/Follow";

const Follows = () => {
  return (
    <div className="bg-gray-base bg-opacity-5 rounded-xl">

      {/* Header */}
      <div className="flex items-center py-3 px-4">
        {/* Title */}
        <h2 className="font-black text-black text-lg">Who to follow</h2>
      </div>

      {/* Follows */}
      <Follow />
      <Follow />

      {/* Footer */}
      <a href="/" className="block text-sm text-primary-base transition hover:bg-gray-extralight w-full py-4 px-4 rounded-b-xl">
          Show More
      </a>
    </div>
  );
};

export default Follows;
