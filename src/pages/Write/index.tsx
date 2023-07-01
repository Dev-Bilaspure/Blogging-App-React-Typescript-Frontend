import { debug_mode } from "@/debug-controller";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { defaultUserPic } from "@/constants";
import { Button, TextareaAutosize, Typography } from "@mui/material";
import { twMerge } from "tailwind-merge";
import PostImage from "./PostImage";
import TextEditor from "./TextEditor/TextEditor";
import StatusBar from "./StatusBar";

const Write = (props) => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isPublishing, setIsPublishing] = useState<boolean>(false);
  const [blogContent, setBlogContent] = useState<string>("");
  
  return (
    <div
      className={twMerge(
        "mb-20 flex justify-center pt-10 sm:px-5 sm:pt-5",
        props.className
      )}
    >
      <div className="w-1/2 lg:w-3/4 md:w-5/6 xs:w-full">
        <StatusBar
          isSaving={isSaving}
          isPublishing={isPublishing}
          setIsPublishing={setIsPublishing}
          blogContent={blogContent}
        />
        <TextareaAutosize
          className="mt-2 w-full resize-none bg-white py-3 font-merriWeather text-[40px] outline-none sm:text-[28px]"
          placeholder="Title"
        />
        <PostImage />
        <div className="mt-10">
          <TextEditor setIsSaving={setIsSaving} blogContent={blogContent} setBlogContent={setBlogContent}/>
        </div>
      </div>
    </div>
  );
};

export default Write;
