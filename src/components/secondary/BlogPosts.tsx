import { defaultUserPic } from "@/constants";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import sampleImage from "../../assets/images/sample-image.jpeg";
import { twMerge } from "tailwind-merge";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import _ from "lodash";
import PopoverMoreIcon from "./PopoverMoreIcon";
import { Button } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import DeletePostModal from "./DeletePostModal";

const BlogPosts = ({ posts, ...props }) => {
  const arr = [1, 2, 3, 4];
  return (
    <div className={twMerge("flex flex-col space-y-[65px]", props.className)}>
      {(posts.length ? posts : [1, 2, 3, 4]).map((item) => {
        return <BlogPost />;
      })}
    </div>
  );
};

const BlogPost = (props) => {
  const [isDeletePostModalOpen, setIsDeletePostModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const postTags = [1, 2, 3];
  const navigate = useNavigate();
  const tag = "stock market";
  const postId = "123";
  return (
    <div className={twMerge("", props.className)}>
      <DeletePostModal
        isDeletePostModalOpen={isDeletePostModalOpen}
        setIsDeletePostModalOpen={setIsDeletePostModalOpen}
        postId={postId}
      />
      <div className="mb-[2px] flex flex-row space-x-2">
        <img
          src={defaultUserPic}
          className="h-[24px] cursor-pointer rounded-lg"
        />
        <Link to="/user/123">
          <p className="flex cursor-pointer flex-row items-center justify-center text-[14px] sm:text-[13px]">
            Dev Bilaspure
          </p>
        </Link>
      </div>
      <div className="flex min-h-[156px] flex-row space-x-[50px] rounded-lg md:space-x-10 sm:space-x-2">
        <div className="flex w-2/3 flex-col space-y-1 rounded-lg">
          <div className="flex h-full flex-col space-y-3 rounded-lg">
            <div className="flex h-full flex-col space-y-3 rounded-lg">
              <Link to="/blog/123">
                <p className="cursor-pointer font-outfit text-[21px] font-bold leading-7 line-clamp-2 sm:text-[19px] sm:line-clamp-3">
                  The title is here showing up dome ramdom text more random
                  textshowing up dome ramdom text more random text
                </p>
              </Link>
              <Link to="/blog/123">
                <p className="font-sans text-[14px] text-[#555555] line-clamp-2 sm:hidden">
                  The description here showing up dome ramdom text more random
                  textshowing up dome ramdom text more random text here showing
                  up dome ramdom text more random textshowing up dome ramdom
                  text more random text here showing up dome ramdom text more
                  random textshowing up dome ramdom text more random text here
                  showing up dome ramdom text more random textshowing up dome
                  ramdom text more random text here showing up dome ramdom text
                  more random textshowing up dome ramdom text more random text
                  here showing up dome ramdom text more random textshowing up
                  dome ramdom text more random text here showing up dome ramdom
                  text more random textshowing up dome ramdom text more random
                  text here showing up dome ramdom text more random textshowing
                  up dome ramdom text more random text here showing up dome
                  ramdom text more random textshowing up dome ramdom text more
                  random text here showing up dome ramdom text more random
                  textshowing up dome ramdom text more random text here showing
                  up dome ramdom text more random textshowing up dome ramdom
                  text more random text here showing up dome ramdom text more
                  random textshowing up dome ramdom text more random text here
                  showing up dome ramdom text more random textshowing up dome
                  ramdom text more random text here showing up dome ramdom text
                  more random textshowing up dome ramdom text more random text
                  here showing up dome ramdom text more random textshowing up
                  dome ramdom text more random text here showing up dome ramdom
                  text more random textshowing up dome ramdom text more random
                  text here showing up dome ramdom text more random textshowing
                  up dome ramdom text more random text
                </p>
              </Link>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-row space-x-7">
                <div className="flex flex-row space-x-2">
                  {isLiked ? (
                    <i className="fa-solid fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[18px]"></i>
                  ) : (
                    <i className="fa-regular fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[18px]"></i>
                  )}
                  <p className="mt-1 font-sans text-[13px]">200</p>
                </div>
                {isBookmarked ? (
                  <i
                    className="fa-solid fa-bookmark  flex cursor-pointer flex-row items-center justify-center text-[17px]"
                    style={{ color: "rgb(26,136,22)" }}
                  ></i>
                ) : (
                  <i className="fa-regular fa-bookmark flex cursor-pointer flex-row items-center justify-center text-[17px]"></i>
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
                    <MoreHorizIcon color="inherit" style={{ fontSize: 23 }} />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 rounded-r-lg object-cover">
          <Link to="/blog/123">
            <img
              src={sampleImage}
              className="h-full w-full cursor-pointer rounded-sm"
            />
          </Link>
        </div>
      </div>
      <div className="mt-1 flex flex-row flex-wrap space-x-4">
        {postTags.map((item) => {
          return (
            <Link to={`/tag/${_.capitalize(tag)}`}>
              <div className="mt-2 cursor-pointer rounded-full border border-[#E6E6E6] bg-[#E8E8E8] px-[8px] py-[1px] text-[11px] hover:shadow-lg focus:shadow-sm sm:text-[10px]">
                Stock Market
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPosts;
