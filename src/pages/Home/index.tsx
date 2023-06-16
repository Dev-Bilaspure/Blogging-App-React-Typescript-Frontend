import HomeBanner from "@/components/secondary/HomeBanner";
import { Button } from "@mui/material";
import React from "react";
import BlogPosts from "./BlogPosts";
import CategoryTabs from "./CategoryTabs";
import Suggestions from "./Suggestions";
import { twMerge } from "tailwind-merge";

const Home = (props) => {
  return (
    <div className={twMerge(`mb-20 w-full`, props.className)}>
      <HomeBanner className={""} />
      <div className="flex w-full flex-row pt-[20px] sm:flex-col sm:space-y-10">
        <div className="w-2/3 px-10 sm:w-full sm:px-5">
          <BlogPosts className="mt-10" />
        </div>
        <div className="w-1/3 space-y-5 border-l border-gray px-10 sm:w-full sm:border-none sm:px-5">
          <div className="flex flex-col mt-10">
            <CategoryTabs />
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
