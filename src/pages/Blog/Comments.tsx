import { defaultUserPic } from "@/constants";
import { Button, Popover, Tooltip, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import PopoverMoreIcon from "@/components/secondary/PopoverMoreIcon";
import { twMerge } from "tailwind-merge";

const Comments = () => {
  const obj = {
    comment:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, tenetur. Debitis, sed nihil quasi quia nemo cupiditate aspernatur sequi esse exercitationem! Vitae nesciunt animi laboriosam, reprehenderit maxime dicta velit necessitatibus.",
    likes: 25,
    commenter: "someuserid",
    commenterName: "Dev Bilaspure",
    createdAt: "16th June",
  };
  return (
    <div>
      {[obj, obj, obj, obj].map((item) => {
        return <Comment comment={item} />;
      })}
    </div>
  );
};

const Comment = ({ comment, ...props }) => {
  const isLiked = false;
  return (
    <div className={twMerge("mt-[50px] border-b border-[#E6E6E6] pb-5 ", props.className)}>
      <div className="flex h-9 space-x-3">
        <img src={defaultUserPic} className="cursor-pointer rounded-full" />
        <div className="item-center flex cursor-pointer flex-col justify-center">
          <p className="font-sans text-[14px]">{comment.commenterName}</p>
          <p className="text-[12px]">{comment.createdAt}</p>
        </div>
      </div>
      <div className="mt-5 ">
        <p className="font-lato text-[14px]">{comment.comment}</p>
        <div className="mt-3 flex flex-row justify-between">
          <div className="flex flex-row space-x-2">
            {isLiked ? (
              <i className="fa-solid fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[17px]"></i>
            ) : (
              <i className="fa-regular fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[17px]"></i>
            )}
            <p className="mt-1 font-sans text-[12px]">200</p>
          </div>
          <Tooltip title="more" placement="top">
            <div className="item-center flex cursor-pointer justify-center">
              <PopoverMoreIcon
                element={
                  <div className="flex flex-col px-5 py-2 pt-0">
                    <div className="flex justify-center border-b border-[#E6E6E6] py-2">
                      <Button
                        variant="text"
                        color="error"
                        style={{ textTransform: "none", padding: 0 }}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="flex justify-center py-1">
                      <Button
                        variant="text"
                        color="inherit"
                        style={{ textTransform: "none", padding: 0 }}
                      >
                        Edit
                      </Button>
                    </div>
                  </div>
                }
                buttonElement={<MoreHorizIcon color="inherit" />}
              />
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Comments;
