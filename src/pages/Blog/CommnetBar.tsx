import { Button, Drawer, TextareaAutosize, Typography } from "@mui/material";
import React, { useState } from "react";
import Comments from "./Comments";
import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";
import { useStore } from "@/store/useStore";
import { defaultUserPic } from "@/constants";

const CommentBar = ({ showComments, onCloseShowComment, ...props }) => {
  const {
    data: { authenticatedUser },
  } = useStore();
  const [comment, setComment] = useState("");

  const handleComment = () => {
    console.log(comment);
  };

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
            <div className="border-b border-[#E6E6E6] px-7 pb-10">
              <p className="font-arimo text-[21px] font-bold">{`Responses (${60})`}</p>
              {!authenticatedUser ? (
                <Link to="/login">
                  <TextareaAutosize
                    disabled={true}
                    className="mt-7 w-full resize-none rounded-md bg-white px-4 py-3 text-[14px] outline-none"
                    placeholder="What are your thoughts?"
                    style={{ boxShadow: "0px 0px 10px rgb(180, 180, 180)" }}
                  />
                </Link>
              ) : (
                <div
                  className="mt-7 flex w-full resize-none flex-col space-y-3 rounded-md bg-white px-4 py-4 text-[14px] outline-none"
                  style={{ boxShadow: "0px 0px 10px rgb(180, 180, 180)" }}
                >
                  <div className="flex space-x-2">
                    <div
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-cover"
                      style={{
                        backgroundImage: `url(${
                          authenticatedUser.profilePicture || defaultUserPic
                        })`,
                      }}
                    ></div>
                    <p className="flex items-center justify-center text-[14px]">
                      {`${authenticatedUser.firstName} ${authenticatedUser.lastName}`}
                    </p>
                  </div>
                  <TextareaAutosize
                    className=" w-full resize-none rounded-md bg-white py-3 text-[14px] outline-none "
                    placeholder="What are your thoughts?"
                    onChange={(e) => {
                      if(!authenticatedUser) return
                      setComment(e.target.value)
                    }}
                  />
                  <div className="flex w-full justify-end space-x-4 font-bold">
                    <div className="flex items-center justify-center">
                      <Button
                        variant="text"
                        color="inherit"
                        style={{
                          textTransform: "none",
                          paddingTop: 0,
                          paddingBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          minWidth: 0,
                        }}
                      >
                        <Typography
                          style={{ fontSize: 14, cursor: "pointer" }}
                          onClick={() => setComment("")}
                        >
                          Cancel
                        </Typography>
                      </Button>
                    </div>
                    <div className="item-center flex justify-center">
                      <Button
                        variant="contained"
                        color="success"
                        disabled={comment.length === 0}
                        style={{
                          borderRadius: 30,
                          textTransform: "none",
                          paddingTop: 3,
                          paddingBottom: 3,
                          paddingLeft: 12,
                          paddingRight: 12,
                          boxShadow: "none",
                        }}
                        onClick={handleComment}
                      >
                        <Typography style={{ fontSize: 13 }}>
                          Respond
                        </Typography>
                      </Button>
                    </div>
                  </div>
                </div>
              )}
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
