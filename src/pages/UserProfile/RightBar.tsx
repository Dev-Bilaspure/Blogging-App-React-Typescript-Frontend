import { defaultUserPic } from "@/constants";
import { Button } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";

const RightBar = () => {
  const { username } = useParams();
  return (
    <div className="pt-[120px] sm:pt-[50px] sm:border-t sm:border-gray">
      <div
        className={`flex h-[90px] w-[90px] justify-center rounded-full bg-cover`}
        style={{
          backgroundImage: `url(${defaultUserPic})`,
        }}
      ></div>
      <p className="mt-2 font-sans text-[16px] font-medium">Dev Bilaspure</p>
      <div className="flex space-x-5">
        <Button
          variant="text"
          color="inherit"
          style={{
            padding: 0,
            textTransform: "none",
            minWidth: 0,
            minHeight: 0,
            paddingTop: 0,
            marginTop: 7,
          }}
        >
          <Link to={`/user/${username}/followers`}>
            <p className="cursor-pointer text-[14px] text-[#1B5E20]">
              203K Followers
            </p>
          </Link>
        </Button>
        <Button
          variant="text"
          color="inherit"
          style={{
            padding: 0,
            textTransform: "none",
            minWidth: 0,
            minHeight: 0,
            paddingTop: 0,
            marginTop: 7,
          }}
        >
          <Link to={`/user/${username}/followings`}>
            <p className="cursor-pointer text-[14px] text-[#1B5E20]">
              203K Followings
            </p>
          </Link>
        </Button>
      </div>
      <p className="mt-2 text-[14px] font-medium text-[#757575]">
        Dad, president, autor Dad, president, autor
      </p>
    </div>
  );
};

export default RightBar;
