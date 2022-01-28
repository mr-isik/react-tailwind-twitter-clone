import React, { useState } from "react";

/* Icons */
import { ImEarth } from "react-icons/im";
import {
  ImageIcon,
  GifIcon,
  ChartIcon,
  EmoteIcon,
  DateIcon,
  LocationIcon,
} from "../../icons/icon";

const SendTweet = () => {
  const [settingsShow, setSettingsShow] = useState(false);

  return (
    <div className=" w-full border-b border-gray-lightest py-4">
      <div className="px-4 w-full h-full flex items-start gap-x-4">
        {/* Profile */}
        <a href="/" className="w-12 h-12">
          <img
            src="https://pbs.twimg.com/profile_images/1349227241402757121/02DsyDvX_400x400.jpg"
            alt="Profile Photo"
            className="w-full h-full rounded-full"
          />
        </a>

        {/* Input */}
        <div className="flex-auto">
          <input
            type="text"
            name="tweet"
            className="bg-white block w-full focus:outline-none text-lg h-12"
            placeholder="What's happening?"
            onClick={() => setSettingsShow(true)}
          />
          {settingsShow ? (
            <div>
              <a
                href="/"
                className="px-3 py-1 rounded-full inline-flex items-center gap-x-2 transition relative -left-3 hover:bg-primary-base hover:bg-opacity-10 text-xs text-primary-base font-semibold"
              >
                <ImEarth size={15} /> Everyone can reply
              </a>
              <hr className="mt-2 mb-4 border-gray-lightest" />
            </div>
          ) : null}
          <div className="flex justify-between items-center">
            {/* Icons */}
            <div className="flex">
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center text-primary-base transition hover:bg-primary-base hover:bg-opacity-10 rounded-full"
              >
                <ImageIcon size={18} />
              </a>
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center text-primary-base transition hover:bg-primary-base hover:bg-opacity-10 rounded-full"
              >
                <GifIcon size={18} />
              </a>
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center text-primary-base transition hover:bg-primary-base hover:bg-opacity-10 rounded-full"
              >
                <ChartIcon size={18} />
              </a>
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center text-primary-base transition hover:bg-primary-base hover:bg-opacity-10 rounded-full"
              >
                <EmoteIcon size={18} />
              </a>
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center text-primary-base transition hover:bg-primary-base hover:bg-opacity-10 rounded-full"
              >
                <DateIcon size={18} />
              </a>
              <a
                href="/"
                className="w-8 h-8 flex items-center justify-center text-primary-base transition hover:bg-primary-base hover:bg-opacity-10 rounded-full"
              >
                <LocationIcon size={18} />
              </a>
            </div>

            <a
              href="/"
              className="px-5 py-2 bg-primary-base transition hover:bg-primary-dark rounded-full text-white text-sm font-semibold"
            >
              Tweet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendTweet;
