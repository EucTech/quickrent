"use client";
import { Bath, BedDouble, LocateFixed, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";


interface FeaturedPropertyType {
  listingType: string;
  title: string;
  price: string;
  numOfBeds: string;
  numOfBaths: string;
  propertyMeter: string;
  location: string;
  image: string;
  className?: string;
}

const FeaturedPropertyProps: React.FC<FeaturedPropertyType> = ({
  listingType,
  title,
  price,
  numOfBaths,
  numOfBeds,
  propertyMeter,
  location,
  image,
  className,
}) => {
  const truncatedText =
    title.length > 25 ? title.substring(0, 25) + "..." : title;
  return (
    <div
      className={`w-[80%] md:w-[40%] lg:w-[28em] xl:w-[30em] flex lg:flex-row flex-col h-fit group rounded-md shadow-2xl overflow-hidden ${className}`}
    >
      <div
        className="lg:w-[15em] w-full "
      >
            <Image
              src={image}
              alt="Property Image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
      </div>

      <div className="w-full flex flex-col gap-4 py-4 ">
        <div className="flex flex-col gap-2 items-start justify-between px-4">
          <div className="w-full flex  gap-1 items-center justify-between ">
            <Link
              href={"#"}
              className=" text-[13px] sm:text-[15px] font-semibold text-tdeepblue hover:text-tblue-2"
            >
              <h3>{truncatedText}</h3>
            </Link>
            <p className="text-tblue-2 font-bold text-[18px] sm:text-[21px]">
              ${price}
            </p>
          </div>
          <p className=" text-[13px] sm:text-[14px] font-[400] bg-[#f7460015] rounded-4xl px-2 py-[1px] text-[#F74400]">
            {listingType}
          </p>
        </div>
        <div className="flex lg:flex-row flex-col items-start lg:items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <span className="size-7 flex items-center justify-center bg-[#e5f2fa] rounded-full">
              <BedDouble className="size-[16px] text-[#797f92]" />
            </span>
            <p className=" text-[13px] sm:text-[15px] font-[500] text-tcolor/80">
              <span>{numOfBeds}</span> Beds
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-7 flex items-center justify-center bg-[#e5f2fa] rounded-full">
              <Bath className="size-[16px] text-[#797f92]" />
            </span>
            <p className=" text-[13px] sm:text-[15px] font-[500] text-tcolor/80">
              <span>{numOfBaths}</span> Baths
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="size-7 flex items-center justify-center bg-[#e5f2fa] rounded-full">
              <LocateFixed className="size-[16px] text-[#797f92]" />
            </span>
            <p className=" text-[13px] sm:text-[15px] font-[500] text-tcolor/80">
              <span>{propertyMeter}</span> sqft
            </p>
          </div>
        </div>

        <div className="border-b border-tdeepblue/15 " />

        <div className="flex items-center justify-between px-4">
          <span className="flex items-center text-[13px] sm:text-[15px] gap-2 text-[#68808f]">
            <MapPin />
            <p>{location}</p>
          </span>
          <button className="py-1 px-5 text-[13px] sm:text-[15px] text-white rounded-3xl bg-tblue-2 cursor-pointer">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPropertyProps;
