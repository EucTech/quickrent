import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const BeAgent = () => {
  return (
    <div className="w-full flex items-center flex-col md:flex-row justify-between gap-10 md:gap-5 px-5 sm:px-10 lg:px-20 bg-[#1266E3] py-20 ">
      <div className=" md:text-start text-center">
        <h2 className="text-white font-bold text-[28px] sm:text-[30px]">Want To Become A Real Estate Agent?</h2>
        <p className="text-white/80 text-[16px] font-normal">We'll help you to grow your career and growth.</p>
      </div>

      <Link href="/register">
        <Button
          variant="outline"
          className="border-tblue/50 border-5 !py-6 px-16 sm:px-20 cursor-pointer rounded-4xl bg-[#fff] hover:bg-[#fff]/80 hover:text-tdeepblue text-tdeepblue text-[16px] font-semibold"
        >
          Register
        </Button>
      </Link>
    </div>
  );
};

export default BeAgent;
