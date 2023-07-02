import HomeBanner from "@/components/secondary/HomeBanner";
import { Button } from "@mui/material";
import React, { Component, useEffect, useState } from "react";
import BlogPosts from "../../components/secondary/BlogPosts";
import Suggestions from "../../components/secondary/Suggestions";
import { twMerge } from "tailwind-merge";
import TagsTabs from "../../components/secondary/TagsTabs";
import { useStore } from "@/store/useStore";
import { debug_mode } from "@/debug-controller";
import SimpleIconZoom from "@/components/primary/SimpleIconZoom";

const Home = (props) => {
  const {data: {authenticatedUser}, actions: {post: {getAllPosts}}} = useStore();
  const [posts, setPosts] = useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  useEffect(() => {
    setIsFetching(true);
    (async() => {
      const response = await getAllPosts();
      
      if(response.success) {
        setPosts(response.posts);
      } else {
        setErrorMessage(response.message);
      }
      if(debug_mode)
        console.log(response);
      setIsFetching(false);
    })()
  }, [])

  return (
    <div className={twMerge(`mb-20 w-full`, props.className)}>
      <HomeBanner className={`${authenticatedUser ? 'hidden' : 'block'}`} />
      <div className="flex w-full flex-row  sm:flex-col sm:space-y-10">
        <div className="w-2/3 px-[100px] md:px-20 sm:w-full sm:px-5 pt-[20px]">
          <BlogPosts posts={posts} className="mt-10" />
        </div>
        <div className="w-1/3 space-y-5 border-l border-gray px-20 pl-10 md:px-10 sm:w-full sm:border-none sm:px-5">
          <div className="flex flex-col mt-10 pt-[20px]">
            <TagsTabs />
            <Suggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
