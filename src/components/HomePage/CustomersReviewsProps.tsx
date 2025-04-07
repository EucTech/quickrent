import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";


interface CustomerReviewPropsType {
    name: string;
    review: string;
    image: string;
}

const CustomersReviewsProps: React.FC<CustomerReviewPropsType> = ({name, review, image}) => {
  return (
    <div
      className=" w-full sm:w-[24em]  min-h-[10em] mx-auto flex items-center gap-10 justify-center rounded-2xl p-4 border border-tdeepblue/5 bg-white  "
    >
      <div className="sm:w-full  flex flex-col text-nowrap gap-3 items-center justify-center">
        <div className="size-16">
          <Image
            src={image}
            alt="Cusromer Image"
            width={500}
            height={500}
            className="size-full object-cover rounded-full"
          />
        </div>

        <h3>{name}</h3>

      </div>

      <div className="flex flex-col gap-3 ">
        <div className="flex items-center gap-2 text-[#b97b08c0]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
        </div>
      <p className="text-[14px]">
        {review}
      </p>
      </div>
    </div>
  );
};

export default CustomersReviewsProps;
