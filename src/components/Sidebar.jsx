import React from "react";

/* Icons */
import {
  HomeIcon,
  ExploreIcon,
  MessageIcon,
  BookmarkIcon,
  ListIcon,
  ProfileIcon,
  MoreIcon,
  NotificationIcon,
  TweetIcon,
} from "../icons/icon";
import twitterLogo from "../img/twitter.svg";
import { BiDotsHorizontalRounded as DotsIcon } from "react-icons/bi";

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between items-end xl:items-start xl:flex-shrink-0 xl:w-72 gap-y-2 px-4 xl:pr-6">
      {/* Top */}
      <div className="w-max xl:w-full flex flex-col items-end xl:items-start">
        {/* Logo */}
        <a
          href="/"
          className="p-3.5 block transition hover:bg-primary-base hover:bg-opacity-10 w-max rounded-full"
        >
          <img src={twitterLogo} alt="Twitter Logo" className="w-7 h-7" />
        </a>

        {/* Nav */}
        <nav className="flex flex-col gap-y-2 my-4 w-max xl:w-full">
          <a
            href="/"
            className="flex text-lg gap-x-3 py-3 px-4 rounded-full hover:bg-gray-extralight w-max transition duration-200"
          >
            <HomeIcon /> <span className="hidden xl:flex">Home</span>
          </a>
          <a
            href="/"
            className="flex text-lg gap-x-3 py-3 px-4 rounded-full hover:bg-gray-extralight w-max transition duration-200"
          >
            <ExploreIcon /> <span className="hidden xl:flex">Explore</span>
          </a>
          <a
            href="/"
            className="flex text-lg gap-x-3 py-3 px-4 rounded-full hover:bg-gray-extralight w-max transition duration-200"
          >
            <NotificationIcon />{" "}
            <span className="hidden xl:flex">Notifications</span>
          </a>
          <a
            href="/"
            className="flex text-lg gap-x-3 py-3 px-4 rounded-full hover:bg-gray-extralight w-max transition duration-200"
          >
            <MessageIcon /> <span className="hidden xl:flex">Messages</span>
          </a>
          <a
            href="/"
            className="flex text-lg gap-x-3 py-3 px-4 rounded-full hover:bg-gray-extralight w-max transition duration-200"
          >
            <BookmarkIcon /> <span className="hidden xl:flex">Bookmarks</span>
          </a>
          <a
            href="/"
            className="flex text-lg gap-x-3 py-3 px-4 rounded-full hover:bg-gray-extralight w-max transition duration-200"
          >
            <ListIcon /> <span className="hidden xl:flex">Lists</span>
          </a>
          <a
            href="/"
            className="flex text-lg gap-x-3 py-3 px-4 rounded-full hover:bg-gray-extralight w-max transition duration-200"
          >
            <ProfileIcon /> <span className="hidden xl:flex">Profile</span>
          </a>
          <a
            href="/"
            className="flex text-lg gap-x-3 py-3 px-4 rounded-full hover:bg-gray-extralight w-max transition duration-200"
          >
            <MoreIcon /> <span className="hidden xl:flex">More</span>
          </a>
        </nav>

        {/* Tweet Button */}
        <a
          href="/"
          className="rounded-full font-bold bg-primary-base hover:bg-primary-dark transition text-center text-white w-12 mr-1 xl:mr-0 h-12 xl:w-full flex items-center justify-center"
        >
          <span className="flex xl:hidden">
            <TweetIcon />
          </span>
          <span className="hidden xl:flex">Tweet</span>
        </a>
      </div>

      {/* Account */}
      <div className="flex justify-end xl:justify-between mb-4 items-center w-full rounded-full p-3 transition hover:bg-gray-extralight">
        {/* Profile */}
        <img
          src="https://pbs.twimg.com/profile_images/1349227241402757121/02DsyDvX_400x400.jpg"
          alt="Profile"
          className="w-10 h-10 rounded-full flex-shrink-0"
        />

        {/* Tag */}
        <div className="hidden xl:flex flex-col">
          <h4 className="text-md font-bold text-black">Ömer Faruk</h4>
          <p className="text-gray-base text-sm">@merFaru96465644</p>
        </div>

        {/* Menu */}
        <DotsIcon className="hidden xl:block" size={23} />
      </div>
    </aside>
  );
}
