import HomeBanner from "@/components/secondary/HomeBanner";
import { Button } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import BlogPosts from "../../components/secondary/BlogPosts";
import Suggestions from "../../components/secondary/Suggestions";
import { twMerge } from "tailwind-merge";
import TagsTabs from "../../components/secondary/TagsTabs";
import { useStore } from "@/store/useStore";
import { debug_mode } from "@/debug-controller";
import Posts from "./Posts";
import { defaultUserPic } from "@/constants";
import RightBar from "./RightBar";

const UserProfile = (props) => {
  return (
    <div className={twMerge(`mb-20 w-full`, props.className)}>
      <div className="flex min-h-screen w-full flex-row sm:flex-col sm:space-y-10">
        <div className="w-2/3 overflow-y-auto px-[120px] pt-[50px] md:px-20 sm:w-full sm:px-5">
          <div className="flex flex-col space-y-0 border-b-2 border-[#E6E6E6] pb-5">
            <p className="font-arimo text-[40px] font-bold sm:text-[34px] ">
              Dev Bilaspure
            </p>
            <p className="font-sans font-medium italic text-[#757575] sm:text-[15px]">
              @devbilaspure
            </p>
          </div>
          <div className="mt-10">
            <Posts />
          </div>
        </div>
        <div className="fixed right-0 top-0 h-screen w-1/3 space-y-5 border-l border-gray px-10 md:px-10 sm:static sm:inset-auto sm:h-auto sm:w-full sm:border-none sm:px-5">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
