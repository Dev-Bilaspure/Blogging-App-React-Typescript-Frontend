import { tagsArray } from "@/constants";
import { debug_mode } from "@/debug-controller";
import { useStore } from "@/store/useStore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import _ from "lodash";
import TagsTabs from "@/components/secondary/TagsTabs";
import BlogPosts from "@/components/secondary/BlogPosts";
import axios from "axios";

const LikedPosts = () => {
  const [posts, setPosts] = useState<any>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const {
    actions: {
      post: { getPostsByTag },
    },
  } = useStore();
  const { tag } = useParams();

  useEffect(() => {
    setIsFetching(true);

    if (!tag || tagsArray.indexOf(tag) === -1) {
      setErrorMessage("Tag not found");
      setIsFetching(false);
      return;
    }
    (async () => {
      const response = await getPostsByTag(tag);

      if (response.success) {
        setPosts(response.posts);
      } else {
        setErrorMessage(response.message);
      }
      if (debug_mode) console.log(response);
      setIsFetching(false);
    })();
  }, []);

  return (
    <div className={`flex  w-full flex-row sm:flex-col`}>
      <div className=" w-2/3 px-20 py-10 md:px-10 sm:w-full sm:px-5  ">
        <div className="mb-10 flex h-fit space-x-3 border-b border-[#E6E6E6] pb-10 sm:pb-5">
          <div className="h-[45px] w-[45px] rounded-full bg-[#E6E6E6] text-[27px] sm:h-[33px] sm:w-[33px] sm:text-[20px]">
            <i className="fa-solid fa-thumbs-up text-[rgb(45, 45, 45)] ml-[9px] mt-[9px]  sm:mt-[8px] sm:ml-[8px]"></i>
          </div>
          <p className="flex items-center justify-center font-sans text-[32px] font-bold sm:text-[25px]">
            {"Liked"}
          </p>
        </div>
        <div>
          <BlogPosts posts={posts} />
        </div>
      </div>
      <div className="w-1/3 border-l border-gray py-10 px-20 md:px-10 sm:w-full sm:px-5">
        <TagsTabs />
      </div>
    </div>
  );
};

export default LikedPosts;
