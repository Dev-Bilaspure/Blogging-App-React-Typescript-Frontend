import React from "react";
import RightBar from "./RightBar";
import { twMerge } from "tailwind-merge";
import { Link, useLocation, useParams } from "react-router-dom";
import { defaultUserPic } from "@/constants";
import { Button } from "@mui/material";
import _ from "lodash";

const UserFFs = (props) => {
  const { pathname } = useLocation();
  const { username } = useParams();
  console.log(pathname.split("/"));

  return (
    <div className={twMerge(`mb-20 w-full pb-0`, props.className)}>
      <div className="flex min-h-screen w-full flex-row sm:flex-col sm:space-y-10">
        <div className="w-2/3 overflow-y-auto px-[120px] pt-[50px] md:px-20 sm:w-full sm:px-5 sm:pb-[20px]">
          <div className="flex flex-col space-y-0 pb-5">
            <div className="mb-5 flex space-x-2 text-[14px] text-[#757575]">
              <Link to={`/user/${username}`}>
                <p className="cursor-pointer hover:text-black">Dev Bilaspure</p>
              </Link>
              <p>{">"}</p>
              <Link to={`/user/${username}/${pathname.split("/")[3]}`}>
                <p className="cursor-pointer hover:text-black">
                  {_.capitalize(pathname.split("/")[3])}
                </p>
              </Link>
            </div>
            <p className="font-arimo text-[40px] font-bold sm:text-[34px] ">
              200,000 {_.capitalize(pathname.split("/")[3])}
            </p>
          </div>
          <div className="mt-5 flex flex-col space-y-8">
            {[1, 2, 3, 4, 5].map((item) => {
              return <UserFF />;
            })}
          </div>
        </div>
        <div className="fixed right-0 top-0 h-screen w-1/3 space-y-5 border-l border-gray px-10 md:px-10 sm:static sm:inset-auto sm:h-auto sm:w-full sm:border-none sm:px-5">
          <RightBar />
        </div>
      </div>
    </div>
  );
};

const UserFF = () => {
  return (
    <div className="flex space-x-10 sm:space-x-5">
      <div className="flex w-full space-x-6 sm:space-x-4">
        <img
          src={defaultUserPic}
          className="h-[45px] w-[45px] cursor-pointer rounded-full sm:h-[40px] sm:w-[40px]"
        />
        <div className="flex flex-col space-y-1">
          <Link to="/user/123">
            <p className=" text-[18px] font-medium sm:text-[16px]">
              Pari Bilaspure
            </p>
          </Link>
          <Link to="/user/123">
            <p className="text-[13px] font-medium text-[#757575] sm:text-[12px]">
              I’m a teacher of 24 years. I believe that whenever we learn
              something new it’s an act of community service.
            </p>
          </Link>
        </div>
      </div>
      <div className="">
        <Button
          variant="contained"
          color="success"
          style={{
            borderRadius: 30,
            textTransform: "none",
            boxShadow: "none",
            paddingLeft: 15,
            paddingRight: 15,
            paddingTop: 4,
            paddingBottom: 4,
            minWidth: 0,
          }}
        >
          <p className="sm:text-[12px]">Follow</p>
        </Button>
      </div>
    </div>
  );
};
export default UserFFs;
