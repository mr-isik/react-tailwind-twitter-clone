import React from "react";

/* Icons */
import { GoSearch as SearchIcon } from "react-icons/go";

/* Components */
import Trends from "./Trends";
import Follows from "./Follows";

export default function Timeline() {
  return (
    <aside className="w-96 hidden lg:flex flex-shrink-0 flex-col gap-y-6 my-4 px-6">
      {/* Search Bar */}
      <form action="/" className="flex flex-row-reverse">

        {/* Input */}
        <input
          type="text"
          name="search"
          className="w-full rounded-r-full bg-gray-base text-sm bg-opacity-10 focus:bg-white border border-l-0 border-opacity-0 border-primary-base focus:border-opacity-100 peer px-2 py-3 focus:outline-none"
          placeholder="Search Twitter"
        />

        {/* Icon */}
        <div className="bg-gray-base bg-opacity-10 w-max rounded-l-full flex items-center justify-center peer-focus:bg-white text-gray-base border border-r-0 border-primary-base  border-opacity-0 peer-focus:border-opacity-100 peer-focus:text-primary-base pl-4 pr-2 py-3">
          <SearchIcon />  
        </div>
      </form>

      {/* Trends */}
      <Trends />

      {/* Follows */}
      <Follows />
    </aside>
  );
}
