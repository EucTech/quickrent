import React from "react";

const ListingHeroSection = () => {
  return (
    <div className=" relative overflow-hidden w-full min-h-[12em] px-5 sm:px-10 md:px-20 py-10">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url(/house3.jpg)] bg-cover bg-fixed bg-center z-0"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-tdeepblue/90 to-tcolor z-10"></div>

      <div className="flex flex-col relative z-20 ">
        <h1 className=" text-[40px] sm:text-[60px] font-bold text-white">Property List</h1>
        <p className="text-white text-sm sm:text-lg font-normal mt-2 max-w-xl">
          Browse through our curated selection of top-rated properties across
          the region.
        </p>
      </div>
    </div>
  );
};

export default ListingHeroSection;
