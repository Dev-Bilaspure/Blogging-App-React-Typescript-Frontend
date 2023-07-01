import { debug_mode } from "@/debug-controller";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { defaultUserPic } from "@/constants";
import { Typography } from "@mui/material";
import bannerimage from "../../assets/images/bannerImg.jpg";
import MiddleBar from "./MiddleBar";
import { twMerge } from "tailwind-merge";

const Blog = (props) => {
  const location = useLocation();
  const { id } = useParams();
  const sampleText = `This morning, I spent half an hour
   trying the Apple Vision Pro headset. Here’s the punch line: 
   This is one freaking mind-blowing piece of tech. I mean, 
   when Steve Jobs unveiled the iPhone in 2007, you could feel 
   the paradigm shifting in real time. This was like that, but 
   better. In case you’ve been on news blackout for the last 24 
   hours, we’re talking about Apple’s augmented-reality headset. 
   Its development was supposedly insanely expensive, internally contentious, 
   and repeatedly delayed. But the result is so advanced and polished, 
   it makes Meta’s VR headsets look like Blackberries.`;
  if (debug_mode) {
    console.log(id);
  }
  return (
    <div
      className={twMerge("flex justify-center pt-10 sm:px-5", props.className)}
    >
      <div className="w-1/2 lg:w-3/4 xs:w-full">
        <p className="font-arimo text-[45px] font-bold leading-tight text-[#373737] lg:text-[40px] md:text-[35px] sm:text-[30px] sm:leading-9">
          The title is here a big one. The title is here a big one. The title is
          here a big one
        </p>
        <img src={bannerimage} className="mt-5 rounded-lg" />
        <div className="mt-10 pb-10">
          <div className="flex h-[45px] space-x-3 ">
            <img src={defaultUserPic} className="cursor-pointer rounded-full" />
            <div className="item-center flex cursor-pointer flex-col justify-center space-y-0">
              <p className="text-[14px]">Dev Bilaspure</p>
              <p className="text-[13px] text-[#757575]">16 mins ago</p>
            </div>
            <p className="text-[#1A8917] hover:cursor-pointer">
              <Typography style={{ fontSize: 15 }}>Follow</Typography>
            </p>
          </div>
        </div>
        <div className="mt-2 h-[45px] w-full border-b-2 border-t-2 border-[#F2F2F2] border-[#F2F2F2]">
          <MiddleBar textToRead={sampleText} />
        </div>
        <div className="mt-10">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <div className="mb-10 font-merriWeather text-[18px] sm:text-[14px]">
                {sampleText}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
