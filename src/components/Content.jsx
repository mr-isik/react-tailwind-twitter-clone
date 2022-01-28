import React from "react";

/* Icons */
import { TopTweetsIcon } from "../icons/icon";
import SendTweet from "./ui/SendTweet";
import Tweet from "./ui/Tweet";

export default function Content() {
  return (
    <div className="flex-auto border-x border-gray-lightest">
      {/* Header */}
      <a href="/" className="flex justify-between items-center w-full py-2 px-4">
        {/* Title */}
        <h1 className="text-xl font-bold">Home</h1>

        {/* Top Tweets */}
        <a href="/" className="w-10 h-10 flex items-center justify-center rounded-full transition hover:bg-gray-extralight">
            <TopTweetsIcon />
        </a>
      </a>

      {/* Send Tweet */}
      <SendTweet />

      {/* Tweet */}
      <Tweet /> 
    </div>
  );
}
