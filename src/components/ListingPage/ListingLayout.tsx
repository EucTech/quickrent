"use client";
import React, { useEffect, useState } from "react";
import AllListing from "./AllListing";
import { IoFilterCircle } from "react-icons/io5";
import { PropertyData } from "@/utils/dummyData";
import Sidebar from "./Sidebar";

const ITEMS_PER_PAGE = 6;

const ListingLayout = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = PropertyData.length;
  const startItem = (currentPage - 1) * ITEMS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * ITEMS_PER_PAGE, totalItems);

  const handleResize = () => {
    setSmallScreen(window.innerWidth < 992);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sideTransition = toggle
    ? "translate-x-0 transition-all duration-500"
    : "-translate-x-full transition-all duration-500";

  return (
    <div className="flex items-start bg-[#f7f9fc] gap-10 px-5 md:px-10 xl:px-28 py-20">
      {smallScreen ? (
        <div className={`${sideTransition} fixed top-100 left-0 z-50 size-fit bg-white shadow-lg`}>
          <Sidebar />
        </div>
      ) : (
        <Sidebar />
      )}

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-tdeepblue text-[18px] lg:text-[20px]">
            Showing {startItem} - {endItem} of {totalItems} Results
          </h2>
          <IoFilterCircle
            onClick={() => setToggle(prev => !prev)}
            className="size-8 text-tdeepblue cursor-pointer block"
          />
        </div>
        <AllListing
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalItems={totalItems}
        />
      </div>
    </div>
  );
};

export default ListingLayout;
