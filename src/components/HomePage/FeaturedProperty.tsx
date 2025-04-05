import { FeaturedData } from "@/utils/dummyData";
import React from "react";
import FeaturedPropertyProps from "./FeaturedPropertyProps";

const FeaturedProperty = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-5 lg:px-10 2xl:px-20 ">
      
      <div className=" w-full sm:w-[90%] lg:w-[65%] flex flex-col gap-3 items-center justify-center text-center">
        <h2 className=" leading-[1.5] text-[30px] sm:text-[35px] font-bold text-tdeepblue">
          Featured Property For Sale
        </h2>
        <p className="text-[16px] font-normal text-tcolor">
          Truly exceptional and elegant, this property offers a rare
          opportunity. It combines comfort and charm, free from flaws and
          thoughtfully designed for those who appreciate refined living.
        </p>
      </div>

      <div className=" w-full flex flex-wrap justify-center items-center mt-10 mb-7 gap-y-10 gap-x-5  ">
        {FeaturedData.slice(0, 6).map((property, index) => (
          <FeaturedPropertyProps
            key={index}
            listingType={property.listingType}
            title={property.title}
            price={property.price}
            numOfBaths={property.numOfBaths}
            numOfBeds={property.numOfBeds}
            propertyMeter={property.propertyMeter}
            location={property.location}
            image={property.image}
            className="w-[100%] h-full flex "
          />
        ))}
      </div>

    </div>
  );
};

export default FeaturedProperty;
