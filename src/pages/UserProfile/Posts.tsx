import React, { useState } from "react";
import sampleImage from "../../assets/images/sample-image.jpeg";
import { Link } from "react-router-dom";
import _ from "lodash";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PopoverMoreIcon from "@/components/secondary/PopoverMoreIcon";
import { Button, Tooltip } from "@mui/material";
import DeletePostModal from "@/components/secondary/DeletePostModal";

const Posts = () => {
  return (
    <div className="flex flex-col space-y-[70px] sm:space-y-[50px]">
      {[1, 2, 3, 4, 5].map((item) => {
        return <Post key={item} />;
      })}
    </div>
  );
};

const Post = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);
  const postId = "123";
  return (
    <div>
      <DeletePostModal
        isDeletePostModalOpen={isDeletePostModalOpen}
        setIsDeletePostModalOpen={setIsDeletePostModalOpen}
        postId={postId}
      />
      <p className="font-sans text-[14px] font-medium text-[#757575]">
        2 days ago
      </p>
      <div className="flex space-x-10 md:space-x-5">
        <div className="flex w-2/3 flex-col space-y-2">
          <p className="font-outfit text-[18px] line-clamp-2">
            Our Statements On the U.S. Supreme Court’s Decision To Overturn
            Affirmative Action{" "}
          </p>
          <p className="font-sans text-[14px] line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            euismod, diam id tincidunt dapibus, velit diam ultricies nunc, in
            aliquam nibh nisl quis nunc.{" "}
          </p>
          <div className="flex justify-between">
            <div className="flex flex-row space-x-7">
              <div className="flex flex-row space-x-2 ">
                {isLiked ? (
                  <i className="fa-solid fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[16px]"></i>
                ) : (
                  <i className="fa-regular fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[16px]"></i>
                )}
                <p className="mt-1 items-center justify-center font-sans text-[13px]">
                  200
                </p>
              </div>
              {isBookmarked ? (
                <i
                  className="fa-solid fa-bookmark  flex cursor-pointer flex-row items-center justify-center text-[15px]"
                  style={{ color: "rgb(26,136,22)" }}
                ></i>
              ) : (
                <i className="fa-regular fa-bookmark flex cursor-pointer flex-row items-center justify-center text-[15px]"></i>
              )}
            </div>
            <div className="item-center flex cursor-pointer justify-center">
              <PopoverMoreIcon
                element={
                  <div className="flex flex-col  py-2 pt-1">
                    <div className="flex justify-center border-b border-[#E6E6E6] py-2 px-5">
                      <Button
                        variant="text"
                        color="error"
                        style={{ textTransform: "none", padding: 0 }}
                        onClick={() => setIsDeletePostModalOpen(true)}
                      >
                        Delete
                      </Button>
                    </div>
                    <div className="flex justify-center py-1 px-5 pt-2">
                      <Button
                        variant="text"
                        color="inherit"
                        style={{ textTransform: "none", padding: 0 }}
                      >
                        Edit
                      </Button>
                    </div>
                    <div className="flex justify-center py-1 px-5 pt-2">
                      <Button
                        variant="text"
                        color="inherit"
                        style={{ textTransform: "none", padding: 0 }}
                      >
                        Unpublish
                      </Button>
                    </div>
                  </div>
                }
                buttonElement={
                  <MoreHorizIcon color="inherit" style={{ fontSize: 20 }} />
                }
              />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <img src={sampleImage} className="h-full w-full" />
        </div>
      </div>
      <div className="mt-3 flex flex-row flex-wrap space-x-4">
        {[1, 2, 3].map((item) => {
          return (
            <Link to={`/tag/${_.capitalize("stock market")}`}>
              <div className="cursor-pointer rounded-full border border-[#E6E6E6] bg-[#E8E8E8] px-[8px] py-[1px] text-[11px] hover:shadow-lg focus:shadow-sm sm:text-[10px]">
                Stock Market
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
