import { defaultUserPic } from "@/constants";
import { Button } from "@mui/material";
import React from "react";
import { twMerge } from "tailwind-merge";

const Suggestions = (props) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className={twMerge("flex flex-col space-y-7 mt-10", props.className)}>
      <p className="font-outfit text-[24px] font-bold text-[#3c3c3c] sm:text-[21px]">
        Suggestions
      </p>
      {arr.map((item) => {
        return <Suggestion />;
      })}
    </div>
  );
};

const Suggestion = () => {
  return (
    <div className="flex flex-row space-x-3 ">
      <img src={defaultUserPic} className="h-[40px] rounded-full" />
      <div className="flex flex-col space-y-0 ">
        <p className="font-lato text-[14px]">Dev Bilaspure</p>
        <p className="text-[12px] italic">@devatchess</p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Button
          variant="outlined"
          style={{
            background: "#fff",
            color: "rgb(26,136,22)",
            border: "1px solid rgb(26,136,22)",
            borderRadius: 100,
            textTransform: "none",
            marginLeft: 10,
            boxShadow: "none",
            paddingBottom: 0,
            paddingTop: 0
          }}
        >
          <p className="mt-[1px] text-[14px] sm:text-[13px]">{true ? "Follow" : "Following"}</p>
        </Button>
      </div>
    </div>
  );
};

export default Suggestions;
