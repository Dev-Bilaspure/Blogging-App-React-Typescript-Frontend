import { categoriesArray } from "@/constants";
import { Button } from "@mui/material";
import React from "react";
import { twMerge } from "tailwind-merge";

const CategoryTabs = (props) => {
  return (
    <div className={twMerge("flex flex-col space-y-5", props.className)}>
      <p className="font-sans text-[29px] font-bold text-[#3c3c3c] sm:text-[23px]">
        Categories
      </p>
      <div>
        {categoriesArray.map((category) => {
          return (
            // <div className="w-fit rounded-3xl hover:shadow-xl ">
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
                boxShadow: '0px 0px 10px rgb(160, 160, 160)'
              }}
            >
              <p className="text-[14px] sm:text-[11px]">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </p>
            </Button>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryTabs;
