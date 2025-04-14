"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AllListing from "./AllListing";
import { IoFilterCircle } from "react-icons/io5";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "../ui/button";
import { GiHamburgerMenu } from "react-icons/gi";

const ListingLayout = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 992) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sideTransition = toggle ? "translate-x-0 transition-all duration-500" : "-translate-x-full transition-all duration-500";

  return (
    <div className="flex items-start bg-[#f7f9fc]  gap-10 px-5 md:px-10 xl:px-28 py-20">
      {smallScreen ? (
        <div className={`  ${sideTransition} fixed top-100 left-0 z-50 size-fit bg-white shadow-lg transition-transform duration-500 ease-in-out`}>
          <Sidebar />
        </div>
      ) : (
        <Sidebar />
      )}

      <div className="flex flex-col ">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-tdeepblue text-[18px] lg:text-[20px]">
            Showing 2 of 18 Results
          </h2>
         <IoFilterCircle onClick={()=>setToggle(prev => !prev)} className="size-8 text-tdeepblue cursor-pointer block" />
        </div>
        <AllListing />
      </div>
    </div>
  );
};

export default ListingLayout;
