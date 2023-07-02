import { debug_mode } from "@/debug-controller";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { defaultUserPic } from "@/constants";
import { Button, Typography } from "@mui/material";
import bannerimage from "../../assets/images/bannerImg.jpg";
import MiddleBar from "./MiddleBar";
import { twMerge } from "tailwind-merge";
import { convert } from "html-to-text";
import "./blogContentStyle.css";
import ReactQuill from "react-quill";

const Blog = (props) => {
  const [isFollowing, setIsFollowing] = useState(false);
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

  const htmlStr = `<p>deok</p><h2>The mount fuji story:</h2><p class="ql-align-center">We the secrets</p><p>the <strong>For all the one <em>dev is </em> for most of</strong> us is the</p>`;
  if (debug_mode) {
    console.log(id);
  }
  return (
    <div
      className={twMerge("flex justify-center pt-10 sm:px-5", props.className)}
    >
      <div className="w-1/2 lg:w-3/4 xs:w-full">
        <p className="font-merriWeather text-[40px] font-bold leading-tight text-[#373737] lg:text-[40px] md:text-[35px] sm:text-[28px] sm:leading-9">
          The title is here a big one. The title is here a big one. The title is
          here a big one
        </p>
        <img src={bannerimage} className="mt-5 rounded-lg" />
        <div className="mt-10 pb-10">
          <div className="flex h-[42px] space-x-3 ">
            <img src={defaultUserPic} className="cursor-pointer rounded-full" />
            <div className="item-center flex cursor-pointer flex-col justify-center space-y-0">
              <p className="text-[14px]">Dev Bilaspure</p>
              <p className="text-[13px] text-[#757575]">16 mins ago</p>
            </div>
            <Button
              variant="text"
              color="success"
              style={{
                padding: 0,
                minWidth: 0,
                textTransform: "none",
                height: "fit-content",
              }}
            >
              <p className="text-[14px] font-medium">
                {isFollowing ? "Following" : "Follow"}
              </p>
            </Button>
          </div>
        </div>
        <div className="mt-2 h-[45px] w-full border-b-2 border-t-2 border-[#F2F2F2] border-[#F2F2F2]">
          <MiddleBar textToRead={convert(htmlStr)} />
        </div>
        <div className="mt-5">
          <div className="mb-10 font-merriWeather text-[16px] sm:text-[15px]">
            <ReactQuill value={htmlStr} readOnly={true} className="ql-style" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
