import PopoverMoreIcon from "@/components/secondary/PopoverMoreIcon";
import { Button, Tooltip } from "@mui/material";
import React, { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CommentBar from "./CommnetBar";
import { useSpeechSynthesis } from "react-speech-kit";
import { twMerge } from "tailwind-merge";

const MiddleBar = ({ textToRead, ...props }) => {
  const isLiked = false;
  const isBookmarked = false;
  const [showComments, setShowComments] = useState<Boolean>(false);
  const toggleCommentBar = (value: Boolean) => {
    setShowComments(value);
  };
  const [isPlaying, setIsPlaying] = useState(false);

  const { speak, cancel } = useSpeechSynthesis();
  return (
    <div className={twMerge("", props.className)}>
      <CommentBar
        showComments={showComments}
        onCloseShowComment={() => toggleCommentBar(false)}
      />
      <div className="mt-2 flex justify-between">
        <div className=" flex flex-row space-x-7 sm:space-x-5">
          <Tooltip title="Like" placement="top-start">
            <div className="flex flex-row space-x-2 ">
              {isLiked ? (
                <i className="fa-solid fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[22px] sm:text-[17px]"></i>
              ) : (
                <i className="fa-regular fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[22px] sm:text-[17px]"></i>
              )}
              <p className="mt-1 font-sans text-[14px] sm:text-[13px]">200</p>
            </div>
          </Tooltip>
          <Tooltip title="Bookmark" placement="top">
            {isBookmarked ? (
              <i
                className="fa-solid fa-bookmark  flex cursor-pointer flex-row items-center justify-center text-[20px] sm:text-[17px]"
                style={{ color: "rgb(26,136,22)" }}
              ></i>
            ) : (
              <i className="fa-regular fa-bookmark flex cursor-pointer flex-row items-center justify-center text-[20px] sm:text-[17px]"></i>
            )}
          </Tooltip>
          <Tooltip title="Comments" placement="top-start">
            <div className="flex space-x-2 ">
              <i
                className="fa-regular fa-comment flex cursor-pointer flex-row items-center justify-center text-[20px] sm:text-[17px]"
                onClick={() => toggleCommentBar(true)}
              ></i>
              <p className="mt-1 font-sans text-[14px] sm:text-[13px]">50</p>
            </div>
          </Tooltip>
        </div>
        <div className=" flex flex-row space-x-7 sm:space-x-5">
          <Tooltip title="Listen" placement="top-start">
            <div className="cursor-pointer">
              {!isPlaying ? (
                <i
                  className="fa-regular fa-circle-play mt-[2px] text-[22px] sm:text-[19px]"
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    speak({ text: textToRead });
                  }}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-circle-pause mt-[2px] text-[22px] sm:text-[19px]"
                  onClick={() => {
                    setIsPlaying(!isPlaying);
                    cancel();
                  }}
                ></i>
              )}
            </div>
          </Tooltip>
          <PopoverMoreIcon
            element={
              <Button
                variant="text"
                color="inherit"
                style={{
                  padding: 0,
                  minWidth: 0,
                  backgroundColor: "#FFFFFF",
                  textTransform: "none",
                }}
              >
                <div className="flex justify-center space-x-1 px-5 py-3">
                  <ContentCopyIcon
                    color="inherit"
                    style={{ height: 17, marginTop: 2 }}
                  />
                  <p className="text-[14px]">{`Copy Link`}</p>
                </div>
              </Button>
            }
            buttonElement={
              <Tooltip title="Share" placement="top-start">
                <i
                  className="fa-solid fa-arrow-up-from-bracket text-[18px] sm:text-[16px]"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(window.location.href);
                      console.log("Text copied to clipboard");
                    } catch (error) {
                      console.error("Failed to copy text:", error);
                    }
                  }}
                ></i>
              </Tooltip>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleBar;
