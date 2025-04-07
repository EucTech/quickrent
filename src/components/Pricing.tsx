import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { IoMdCheckmark } from "react-icons/io";


interface PricingProps {
    price: string;
    packageName: string;
    numOFListings: string;
    className?: string;
    textStyle?: string;
}

const Pricing: React.FC<PricingProps> = ({price, packageName, numOFListings, className, textStyle}) => {
  return (
    <div className=" w-[19em] xl:w-[22em] h-fit flex flex-col items-center justify-between gap-3 border border-[#eaecf1] rounded-sm p-2 ">
      <div className={` w-full flex flex-col items-center justify-center bg-[#03a8f423] rounded-sm py-5 ${className}`}>
        <h1 className={`size-fit text-[50px] font-bold relative text-[#03A9F4] ${textStyle}`}>
          <span className="text-[25px] font-bold absolute top-2 -left-4">
            $
          </span>
          {price}
        </h1>
        <p className="text-tdeepblue text-[20px] font-[700] ">
          {packageName}
        </p>
      </div>

      <div className="w-full flex flex-col items-start justify-start gap-4 ">
        <div className="w-full flex items-center justify-between px-2">
          <p className="text-[15px] font-normal text-tcolor">{numOFListings}</p>

          <div className="size-6 flex items-center justify-center bg-[#0cbfb63d] rounded-full p-1">
            <IoMdCheckmark className="w-full text-[#0cbfb7]" />
          </div>
        </div>
        
        <div className="w-full h-[2] border-b-2 border-[#eaecf1] border-dotted"/>
        <div className="w-full flex items-center justify-between px-2">
          <p className="text-[15px] font-normal text-tcolor">Contact With Agent</p>

          <div className="size-6 flex items-center justify-center bg-[#0cbfb63d] rounded-full p-1">
            <IoMdCheckmark className="w-full text-[#0cbfb7]" />
          </div>
        </div>
        
        <div className="w-full h-[2] border-b-2 border-[#eaecf1] border-dotted"/>
        <div className="w-full flex items-center justify-between px-2">
          <p className="text-[15px] font-normal text-tcolor">One Year Validity</p>

          <div className="size-6 flex items-center justify-center bg-[#0cbfb63d] rounded-full p-1">
            <IoMdCheckmark className="w-full text-[#0cbfb7]" />
          </div>
        </div>
        
        <div className="w-full h-[2] border-b-2 border-[#eaecf1] border-dotted"/>
        <div className="w-full flex items-center justify-between px-2">
          <p className="text-[15px] font-normal text-tcolor">24/7 Fully Support</p>

          <div className="size-6 flex items-center justify-center bg-[#0cbfb63d] rounded-full p-1">
            <IoMdCheckmark className="w-full text-[#0cbfb7]" />
          </div>
        </div>
        
    
      </div>

      <div className="my-8">
        <Link href="/pricing">
          <Button
            variant="outline"
            className="border-[#6cb9a8b7] border-2 !py-6 px-10 md:px-20 cursor-pointer rounded bg-[#8fd4dd8f] hover:bg-[#a0f3de8f]/60 hover:text-tcolor text-tcolor text-[16px] font-semibold"
          >
            Choose Plan
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Pricing;
