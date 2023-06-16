import { defaultUserPic } from "@/constants";
import { Button } from "@mui/material";
import React from "react";
import { twMerge } from "tailwind-merge";

const Suggestions = (props) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className={twMerge("flex flex-col space-y-5", props.className)}>
      <p className="font-sans text-[29px] font-bold text-[#3c3c3c] sm:text-[23px]">
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
      <img src={defaultUserPic} className="h-[52px] rounded-full" />
      <div className="flex flex-col space-y-0 ">
        <p className="font-lato text-[16px]">Dev Bilaspure</p>
        <p className="text-[13px]">@devatchess</p>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Button
          variant="outlined"
          style={{
            paddingLeft: 3,
            paddingRight: 3,
            background: "#fff",
            color: "rgb(26,136,22)",
            border: "1px solid rgb(26,136,22)",
            borderRadius: 100,
            fontSize: 14,
            textTransform: "none",
            paddingTop: 3,
            paddingBottom: 3,
            marginLeft: 10,
            width: 92,
            boxShadow: "none",
            height: 35,
          }}
        >
          <p className="mt-[2px]">{true ? "Follow" : "Following"}</p>
        </Button>
      </div>
    </div>
  );
};

export default Suggestions;
