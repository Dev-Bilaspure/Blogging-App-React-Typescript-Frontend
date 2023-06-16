import { Drawer, TextareaAutosize } from "@mui/material";
import React from "react";
import Comments from "./Comments";
import { twMerge } from "tailwind-merge";

const CommentBar = ({ showComments, onCloseShowComment, ...props}) => {
  return (
    <div className={twMerge("", props.className)}>
      <div className="block sm:hidden">
        <Drawer
          anchor={"right"}
          open={showComments}
          onClose={onCloseShowComment}
          PaperProps={{
            className: "w-1/4 md:w-3/5 sm:w-5/6",
          }}
        >
          <div className="py-5">
            <div className="px-7 border-b border-[#E6E6E6] pb-10">
              <p className="font-arimo text-[21px] font-bold">{`Responses (${60})`}</p>
              <TextareaAutosize
                className="mt-7 w-full rounded-md px-4 py-3 text-[14px] outline-none resize-none"
                placeholder="What are your thoughts?"
                style={{ boxShadow: "0px 0px 10px rgb(180, 180, 180)" }}
              />
            </div>
            <div className="px-7">
              <Comments />
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default CommentBar;
