import React, { useEffect } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BigLogo from "../primary/BigLogo";
import { useStore } from "@/store/useStore";
import { defaultUserPic } from "@/constants";
import PopoverMoreIcon from "./PopoverMoreIcon";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    data: { authenticatedUser },
    actions: {logoutUser}
  } = useStore();

  return (
    <div className="">
      <AppBar style={{ boxShadow: "none" }}>
        <Toolbar
          className={`h-[60px] w-full border-b ${
            location.pathname === "/" ? "border-black" : "border-[#F2F2F2]"
          } bg-white sm:h-[40px]`}
        >
          <div className="flex w-full justify-between px-5 sm:px-0">
            <BigLogo className={""} />
            <div className="flex flex-row items-center justify-center space-x-10 text-black sm:space-x-5">
              <Link to="/tolinkedin" className="sm:hidden">
                <p className="">Contact us</p>
              </Link>
              <Link to="/write" className="sm:hidden">
                <p className="">Write</p>
              </Link>
              {!authenticatedUser && (
                <Link to="/login">
                  <p className="sm:text-[15px]">Sign In</p>
                </Link>
              )}
              {!authenticatedUser && (
                <button
                  onClick={() => navigate("/signup")}
                  className="rounded-3xl bg-[rgb(31,31,31)] px-[20px] py-[7px] text-white shadow-none sm:px-[15px] sm:text-[13px]"
                >
                  Get Started
                </button>
              )}
              {authenticatedUser && (
                <PopoverMoreIcon buttonElement={<img
                  src={defaultUserPic}
                  className="cursor-pointer h-10 rounded-full"
                />} element={<div className="px-5 py-1 ">
                  <Button onClick={() => logoutUser()} variant="text" color="inherit" style={{padding: 0, minWidth: 0, backgroundColor: '#FFFFFF'}}>Logout</Button>
                </div>}/>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
