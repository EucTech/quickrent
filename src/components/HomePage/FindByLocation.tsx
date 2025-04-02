import React from "react";
import FindByLocationProps from "./FindByLocationProps";
import Link from "next/link";
import { Button } from "../ui/button";
import { FindByLocationData } from "@/utils/dummyData";

const FindByLocation = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 bg-tlightbg px-5 lg:px-20 2xl:px-40  mt-20">
      <div className=" w-full sm:w-[90%] lg:w-[50%] flex flex-col gap-3 items-center justify-center text-center">
        <h2 className=" leading-[1.5] text-[30px] sm:text-[35px] md:text-[40px] font-bold text-tdeepblue">
          Find By Location
        </h2>
        <p className="text-[16px] font-normal text-tcolor">
          Explore a wide range of homes in your desired locations. Whether
          you're looking for a luxury apartment, a cozy family home, or a modern
          townhouse, we have the perfect property for you.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center mt-10 mb-7 gap-y-10 gap-x-5 ">
        {
            FindByLocationData.slice(0, 3).map((location, index) => (
            <FindByLocationProps
              key={index}
              image={location.image}
              location={location.location}
              numOfProperties={location.numOfProperties}
            />
            ))
        }
      </div>

      <Link href="/listings">
        <Button
          variant="outline"
          className="border-[#6cb9a8b7] border-2 !py-6 px-10 md:px-20 cursor-pointer rounded bg-[#8fd4dd8f] hover:bg-[#a0f3de8f]/60 hover:text-tcolor text-tcolor text-[16px] font-semibold"
        >
          More Properties
        </Button>
      </Link>

    </div>
  );
};

export default FindByLocation;
