import { defaultUserPic } from "@/constants";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import sampleImage from "../../assets/images/sample-image.jpeg";
import { twMerge } from "tailwind-merge";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import _ from "lodash";

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
  const postTags = [1, 2, 3];
  const isLiked = !true;
  const isBookmarked = true;
  const navigate = useNavigate();
  const tag = "stock market";
  return (
    <div className={twMerge("", props.className)}>
      <div className="flex flex-row space-x-2 mb-[2px]">
        <img
          src={defaultUserPic}
          className="h-[24px] cursor-pointer rounded-lg"
        />
        <p className="flex cursor-pointer flex-row items-center justify-center font-robotoSlab text-[15px] sm:text-[13px]">
          Dev Bilaspure
        </p>
      </div>
      <div className="flex min-h-[156px] flex-row space-x-10 rounded-lg sm:space-x-2">
        <div className="flex w-2/3 flex-col space-y-1 rounded-lg">
          <div className="flex h-full flex-col space-y-3 rounded-lg">
            <div className="flex h-full flex-col space-y-3 rounded-lg">
              <p
                className="cursor-pointer font-lato text-[22px] font-bold leading-7 line-clamp-2 sm:text-[19px] sm:line-clamp-3"
                onClick={() => navigate("/blog/123")}
              >
                The title is here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text
              </p>
              <p
                className="font-lato text-[17px] text-[#555555] line-clamp-2 sm:hidden"
                onClick={() => navigate("/blog/123")}
              >
                The description here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text here showing up
                dome ramdom text more random textshowing up dome ramdom text
                more random text here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text here showing up
                dome ramdom text more random textshowing up dome ramdom text
                more random text here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text here showing up
                dome ramdom text more random textshowing up dome ramdom text
                more random text here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text here showing up
                dome ramdom text more random textshowing up dome ramdom text
                more random text here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text here showing up
                dome ramdom text more random textshowing up dome ramdom text
                more random text here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text here showing up
                dome ramdom text more random textshowing up dome ramdom text
                more random text here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text here showing up
                dome ramdom text more random textshowing up dome ramdom text
                more random text here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text here showing up
                dome ramdom text more random textshowing up dome ramdom text
                more random text here showing up dome ramdom text more random
                textshowing up dome ramdom text more random text
              </p>
            </div>
            <div className="flex flex-row space-x-7">
              <div className="flex flex-row space-x-2">
                {isLiked ? (
                  <i className="fa-solid fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[20px]"></i>
                ) : (
                  <i className="fa-regular fa-thumbs-up flex cursor-pointer flex-row items-center justify-center text-[20px]"></i>
                )}
                <p className="mt-1 font-sans text-[14px]">200</p>
              </div>
              {isBookmarked ? (
                <i
                  className="fa-solid fa-bookmark  flex cursor-pointer flex-row items-center justify-center text-[18px]"
                  style={{ color: "rgb(26,136,22)" }}
                ></i>
              ) : (
                <i className="fa-regular fa-bookmark flex cursor-pointer flex-row items-center justify-center text-[18px]"></i>
              )}
            </div>
          </div>
        </div>
        <div className="w-1/3 rounded-r-lg object-cover">
          <img
            src={sampleImage}
            className="h-full w-full cursor-pointer rounded-lg"
            onClick={() => navigate("/blog/123")}
          />
        </div>
      </div>
      <div className="mt-1 flex flex-row flex-wrap space-x-4">
        {postTags.map((item) => {
          return (
            <Link to={`/tag/${_.capitalize(tag)}`}>
              <div className="mt-2 cursor-pointer rounded-full border border-[#E6E6E6] bg-[#E8E8E8] px-[8px] py-[1px] text-[12px] hover:shadow-lg focus:shadow-sm sm:text-[10px]">
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
