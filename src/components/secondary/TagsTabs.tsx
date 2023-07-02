import { tagsArray } from "@/constants";
import { Button } from "@mui/material";
import _ from "lodash";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const TagsTabs = (props) => {
  return (
    <div className={twMerge("flex flex-col space-y-5", props.className)}>
      <p className="font-outfit text-[24px] font-bold text-[#3c3c3c] sm:text-[21px]">
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
                paddingTop: 2,
                paddingBottom: 2,
                border: "1px solid #E6E6E6",
                // boxShadow: 'none'
              }}
            >
              <p className="text-[13px] sm:text-[11px]">
                {_.capitalize(tag)}
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
