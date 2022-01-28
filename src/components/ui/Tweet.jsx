import React from "react";

/* Icons */
import { CommentIcon, RetweetIcon, LikeIcon, ShareIcon } from "../../icons/icon";

const Tweet = () => {
  return (
    <a href="/" className="py-2 block transition hover:bg-gray-lightest border-b border-gray-lightest">
      <div className="px-4 flex items-start gap-x-4">
        {/* Profile */}
        <a href="/" className="w-12 h-12 flex-shrink-0">
          <img
            src="https://pbs.twimg.com/profile_images/1349227241402757121/02DsyDvX_400x400.jpg"
            alt="Profile Photo"
            className="w-full h-full rounded-full"
          />
        </a>

        {/* Tweet */}
        <div className="flex-auto pt-px">
          {/* Header */}
          <div className="flex items-center mb-1">
            <a
              href="/"
              className="text-black text-sm hover:underline font-bold flex items-center"
            >
              Ömer Faruk
              <span className="text-gray-base text-sm font-medium ml-2 block">
                @merFaru54985765
              </span>
            </a>
            <div className="w-0.5 h-0.5 rounded-full bg-gray-base mx-2"></div>
            <span className="text-gray-base text-sm font-medium block">8h</span>
          </div>

          {/* Body */}

          <div className="flex flex-col gap-y-4">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              repellendus laudantium sequi explicabo maxime consectetur quae
              obcaecati modi placeat. Quidem?
            </p>

            <img
              src="https://images.wallpaperscraft.com/image/single/landscape_mountains_sun_140434_1920x1080.jpg"
              alt="Image"
              className="w-full h-auto rounded-xl"
            />
          </div>

          {/* Footer */}
          <div className="flex items-center w-full justify-between mt-3">
            
            {/* Reply */}
            <a href="/" className="group flex items-center gap-x-1">
              <span className="w-8 h-8 rounded-full transition text-gray-base group-hover:bg-blue group-hover:text-blue group-hover:bg-opacity-10 flex items-center justify-center">
                <CommentIcon />
              </span>
              <span className="text-gray-base text-sm group-hover:text-blue transition">89</span>
            </a>

            {/* ReTweet */}
            <a href="/" className="group flex items-center gap-x-1">
              <span className="w-8 h-8 rounded-full transition text-gray-base group-hover:bg-green group-hover:text-green group-hover:bg-opacity-10 flex items-center justify-center">
                <RetweetIcon />
              </span>
              <span className="text-gray-base text-sm group-hover:text-green transition">8</span>
            </a>

            {/* Like */}
            <a href="/" className="group flex items-center gap-x-1">
              <span className="w-8 h-8 rounded-full transition text-gray-base group-hover:bg-red group-hover:text-red group-hover:bg-opacity-10 flex items-center justify-center">
                <LikeIcon />
              </span>
              <span className="text-gray-base text-sm group-hover:text-red transition">897</span>
            </a>

            {/* Share */}
            <a href="/" className="group flex items-center gap-x-1">
              <span className="w-8 h-8 rounded-full transition text-gray-base group-hover:bg-blue group-hover:text-blue group-hover:bg-opacity-10 flex items-center justify-center">
                <ShareIcon />
              </span>
            </a>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Tweet;
