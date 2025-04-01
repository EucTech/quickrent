import React from "react";
import PropertyProps from "./PropertyProps";
import { PropertyData } from "@/utils/dummyData";

const PropertiesSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 bg-white px-5 sm:px-10 md:px-30 pt-20">
      <div className=" w-full sm:w-[90%] lg:w-[70%] flex flex-col gap-3 items-center justify-center text-center">
        <h2 className=" leading-[1.5] text-[35px] sm:text-[40px] font-bold text-tdeepblue">
          Explore Great Places
        </h2>
        <p className="text-[16px] font-normal text-tcolor">
          Experience comfort and elegance in carefully selected properties that
          match your lifestyle and needs. Enjoy modern amenities, prime
          locations, and thoughtfully designed spaces that make every moment at
          home truly special.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {PropertyData.map((property, index) => (
          <PropertyProps
            key={index}
            listingType={property.listingType}
            title={property.title}
            price={property.price}
            numOfBaths={property.numOfBaths}
            numOfBeds={property.numOfBeds}
            propertyMeter={property.propertyMeter}
            location={property.location}
            images={property.images}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertiesSection;
