import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GrFacebookOption, GrInstagram, GrLinkedinOption, GrTwitter } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 pt-20 bg-[#1a2340f8]">
      <div className="w-full text-[#bcc9f3] flex flex-col md:flex-row gap-5 justify-between px-10 md:px-20 pb-4">
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src={Images.logo}
              alt="Quick rent logo"
              width={500}
              height={500}
              className="w-[8em] filter invert-0 brightness-[30]"
            />
          </Link>

          <div className="flex text-[15px] font-normal flex-col gap-2">
            <p>KG 7 Ave, Kigali</p>
            <p>+250756783957</p>
            <p>info@quickrent.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold text-lg">Company</h1>
          <ul className="flex flex-col gap-2 text-[15px] font-medium">
            <Link className="hover:text-white" href={"/"}>
              <li>Home</li>
            </Link>
            <Link className="hover:text-white" href={"/"}>
              <li>Listings</li>
            </Link>
            <Link className="hover:text-white" href={"/"}>
              <li>Agencies</li>
            </Link>
  
            <Link className="hover:text-white" href={"/"}>
              <li>Add Property</li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-white font-bold text-lg">Location</h1>
          <ul className="flex flex-col gap-2 text-[15px] font-medium">
            <Link className="hover:text-white" href={"/"}>
              <li>Kimironko</li>
            </Link>
            <Link className="hover:text-white" href={"/"}>
              <li>kacyiru</li>
            </Link>
            <Link className="hover:text-white" href={"/"}>
              <li>Zindiro</li>
            </Link>
            <Link className="hover:text-white" href={"/"}>
              <li>Remera</li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="w-full text-[#DDE4FB] bg-tdeepblue flex flex-col md:flex-row gap-5 items-center justify-between py-5 px-5 md:px-20">
        <p className=" text-center text-sm">&copy;2025 Quick Rent. All right reserved</p>

        <div className="flex items-center text-sm gap-4">
         <Link href="#"> <p className="">Privacy Policy</p></Link>
         <Link href="#" > <p className="">Terms of Use</p></Link>
        </div>
        <div className="flex items-center gap-4 ">
        <Link href="#"><GrFacebookOption className="hover:text-white text-[#bcc9f3a1]" /></Link>
        <Link href="#"><GrInstagram className="hover:text-white text-[#bcc9f3a1]" /></Link>
        <Link href="#"><GrTwitter className="hover:text-white text-[#bcc9f3a1]" /></Link>
        <Link href="#"><GrLinkedinOption className="hover:text-white text-[#bcc9f3a1]" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
