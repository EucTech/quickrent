import React from "react";
import Pricing from "../Pricing";

const OurPackage = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-10 py-10 sm:py-20 px-5">
      <div className="w-full sm:w-[90%] lg:w-[65%] flex flex-col gap-3 items-center justify-center text-center">
        <h2 className="leading-[1.5] text-[26px] font-bold text-tdeepblue">
          See Our Packages
        </h2>
        <p className="text-[16px] font-normal text-tcolor">
          Carefully designed with your needs in mind, our packages offer
          exceptional value and quality. Each one is tailored to deliver
          satisfaction without compromise, ensuring a smooth and rewarding
          experience.
        </p>
      </div>

      <div className="w-full flex items-start justify-center ">
      <div className="w-full mx-auto flex flex-wrap items-center justify-center gap-7 "
      >
        <Pricing price="150" packageName="Standard Package" numOFListings="50 Listings" />
        <Pricing price="99" packageName="Platinum Package" numOFListings="30 Listings" className="bg-[#27b73821]" textStyle="text-[#27B737]"/>
        <Pricing price="49" packageName="Basic Package" numOFListings="15 Listings" className="bg-[#fd543223]" textStyle="text-[#FD5332]"/>
      </div>
      </div>
    </div>
  );
};

export default OurPackage;
