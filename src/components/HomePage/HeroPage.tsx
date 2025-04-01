import React from "react";
import PropertySearchBar from "../PropertySearchBar";

const HeroPage = () => {
  return (
    <section className="w-full h-[38em] sm:h-[45em]  relative flex flex-col items-center justify-center overflow-hidden px-5">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(/hero1.jpg)] bg-cover bg-fixed bg-center z-0"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-tlightblue/95 to-tlightblue/90 z-10"></div>

      <div className=" flex flex-col items-center z-20 text-white ">
        <p className="  font-normal leading-[2] text-tdeepblue gap-2 text-[22px] text-center">
          Experience Unmatched{" "}
          <span className="bg-tgreen font-semibold text-white py-1 px-3 rounded-sm">
            Quality
          </span>
        </p>
        <h1 className=" text-center text-[40px] sm:text-[50px] lg:text-[70px] text-tdeepblue">
          Find Your <span className="font-extrabold">Perfect Place.</span>
        </h1>
      </div>

      <PropertySearchBar />
    </section>
  );
};

export default HeroPage;
