import Image from "next/image";
import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

interface FindByLocationPropsType {
  image: string;
  location: string;
  numOfProperties: string;
}

const FindByLocationProps: React.FC<FindByLocationPropsType> = ({
  image,
  location,
  numOfProperties,
}) => {
  return (
    <div className="w-[100%] sm:w-[70%] md:w-[23em] h-fit sm:h-[20em] shad overflow-hidden rounded-md  border border-tdeepblue/15">
      <div className=" w-full h-[14em] cursor-pointer overflow-hidden">
        <Image
          src={image}
          alt="Property Image"
          width={500}
          height={500}
          className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex items-center justify-between gap-5 py-4 px-5">
        <div>
          <h1 className=" text-[13px] sm:text-[15px] font-semibold text-tdeepblue hover:text-tblue-2">
            {location}
          </h1>
          <p className=" text-[13px] sm:text-[15px] font-[400] text-tcolor">
            <span>{numOfProperties} </span> Properties
          </p>
        </div>

        <IoIosArrowDroprightCircle className=" fill-tblue-2 text-white size-13 cursor-pointer " />
      </div>
    </div>
  );
};

export default FindByLocationProps;
