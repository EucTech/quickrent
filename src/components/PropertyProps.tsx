"use client";
import { Bath, BedDouble, LocateFixed, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface PropertyPropsType {
  listingType: string;
  title: string;
  price: string;
  numOfBeds: string;
  numOfBaths: string;
  propertyMeter: string;
  location: string;
  images: string[];
  className?: string;
}

const PropertyProps: React.FC<PropertyPropsType> = ({
  listingType,
  title,
  price,
  numOfBaths,
  numOfBeds,
  propertyMeter,
  location,
  images,
  className
}) => {
  const truncatedText =
    title.length > 30 ? title.substring(0, 30) + "..." : title;
  return (
    <div className={`max-w-[22em] sm:w-[70%] md:w-[22em] h-fit sm:h-[27em] group rounded-md shadow-2xl overflow-hidden ${className}`}>
      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Navigation]}
        className="w-full h-[15em]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image}
              alt="Property Image"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <button className="custom-prev absolute top-1/2 left-3 z-10 bg-white/30 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaAngleLeft className="text-white text-[20px]" />
        </button>
        <button className="custom-next absolute top-1/2 right-3 z-10 bg-white/30 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FaAngleRight className="text-white text-[20px]" />
        </button>
      </Swiper>

      <div className=" flex flex-col gap-4 py-4 ">
        <div className="flex flex-col items-start justify-between px-4">
          <div className="w-full flex items-center justify-between ">
            <p className=" text-[13px] sm:text-[15px] font-[400] text-tcolor">
              {listingType}
            </p>
            <p className="text-tblue-2 font-bold text-[18px] sm:text-[21px]">
              ${price}
            </p>
          </div>
          <Link
              href={"#"}
              className=" text-[15px] font-semibold text-tdeepblue hover:text-tblue-2"
            >
              <h3>{truncatedText}</h3>
            </Link>
        </div>
        <div className="flex items-center justify-between px-4">
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

export default PropertyProps;
