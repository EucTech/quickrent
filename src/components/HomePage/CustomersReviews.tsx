"use client";
import React from "react";
import CustomersReviewsProps from "./CustomersReviewsProps";
import { CustomerReviewData } from "@/utils/dummyData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

const CustomersReviews = () => {
  return (
    <div className="w-full h-fit flex flex-col items-center justify-center gap-10 py-10 sm:py-20 px-5 bg-[#FFF6F5] overflow-hidden ">
      <div className="w-full sm:w-[90%] lg:w-[65%] flex flex-col gap-3 items-center justify-center text-center">
        <h2 className="leading-[1.5] text-[26px] sm:text-[30px] font-bold text-tdeepblue">
          Good Reviews by Customers
        </h2>
        <p className="text-[16px] font-normal text-tcolor">
          Truly appreciated by our clients, who value the quality and integrity
          we provide. They commend the excellent service and the delightful
          experience, free from any issues or disappointments.
        </p>
      </div>

      <div className="w-full flex items-center justify-center gap-5">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            1200: {
              slidesPerView: 3,
            },
            800: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          loop={true}
         
          className=""
        >
          {CustomerReviewData.map((review, index) => (
            <SwiperSlide key={index}  >
              <CustomersReviewsProps
                image={review.image}
                name={review.name}
                review={review.review}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CustomersReviews;
