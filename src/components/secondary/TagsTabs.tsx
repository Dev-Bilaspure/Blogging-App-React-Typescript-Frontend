import { tagsArray } from "@/constants";
import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const TagsTabs = (props) => {
  const navigate = useNavigate();
  return (
    <div className={twMerge("flex flex-col space-y-5", props.className)}>
      <p className="font-sans text-[29px] font-bold text-[#3c3c3c] sm:text-[23px]">
        Tags
      </p>
      <div>
        {tagsArray.map((tag) => {
          return (
            // <div className="w-fit rounded-3xl hover:shadow-xl ">
            <Link to={`/tag/${tag}`}>
            <Button
              variant="contained"
              style={{
                marginRight: 23,
                marginBottom: 23,
                backgroundColor: "#E8E8E8",
                color: "black",
                textTransform: "none",
                borderRadius: 100,
                paddingLeft: 15,
                paddingRight: 15,
                paddingTop: 5,
                paddingBottom: 5,
                border: "1px solid #E6E6E6",
                // boxShadow: '0px 0px 10px rgb(160, 160, 160)'
              }}
            >
              <p className="text-[14px] sm:text-[11px]">
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </p>
            </Button>
            </Link>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagsTabs;
