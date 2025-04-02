import React from "react";
import PropertyProps from "./PropertyProps";
import { PropertyData } from "@/utils/dummyData";
import { Button } from "../ui/button";
import Link from "next/link";

const PropertiesSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-5 bg-white px-5 lg:px-20 2xl:px-40  pt-20">
      <div className=" w-full sm:w-[90%] lg:w-[70%] flex flex-col gap-3 items-center justify-center text-center">
        <h2 className=" leading-[1.5] text-[30px] sm:text-[35px] md:text-[40px] font-bold text-tdeepblue">
          Explore Great Places
        </h2>
        <p className="text-[16px] font-normal text-tcolor">
          Experience comfort and elegance in carefully selected properties that
          match your lifestyle and needs. Enjoy modern amenities, prime
          locations, and thoughtfully designed spaces that make every moment at
          home truly special.
        </p>
      </div>

      <div className=" w-full flex flex-wrap justify-center items-center mt-10 mb-7 gap-y-10 gap-x-5  ">
        {PropertyData.slice(0, 6).map((property, index) => (
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

      <Link href="/listings">
        <Button
          variant="outline"
          className="border-[#6cb9a8b7] border-2 !py-6 px-10 md:px-20 cursor-pointer rounded bg-[#8fd4dd8f] hover:bg-[#a0f3de8f]/60 hover:text-tcolor text-tcolor text-[16px] font-semibold"
        >
          More Properties
        </Button>
      </Link>
    </section>
  );
};

export default PropertiesSection;
