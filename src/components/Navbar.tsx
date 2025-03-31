import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MdOutlineDomainAdd } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import Link from "next/link";
import { Images } from "@/assets";
import { GiHamburgerMenu } from "react-icons/gi";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-50 w-full h-[5em] bg-white/80 backdrop-blur-lg flex items-center px-5 md:px-10 lg:px-24 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] "
    >
      <div className="w-full flex items-center gap-10">
        <Link href="/">
          <Image
            src={Images.logo}
            alt="Quick rent logo"
            width={500}
            height={500}
            className="w-[8em]"
          />
        </Link>

        <ul className=" hidden lg:flex items-center gap-3 text-tcolor font-[500]">
          <Link className="hover:text-tblue-2" href="/">
            <li>Home</li>
          </Link>
          <Link className="hover:text-tblue-2" href="/listings">
            <li>Listings</li>
          </Link>
          <Link className="hover:text-tblue-2" href="/agencies">
            <li>Agencies</li>
          </Link>
          <Link className="hover:text-tblue-2" href="/pricing">
            <li>Pricing</li>
          </Link>
        </ul>
      </div>

      <div className=" hidden lg:flex items-center gap-6">
        <span className="flex items-center gap-2 cursor-pointer">
          <MdOutlineDomainAdd className="text-[25px] text-tgreen " />
          <p className="text-nowrap text-[16px] text-tblue-2 font-[500]">
            Add Property
          </p>
        </span>

        <Button className="flex items-center cursor-pointer bg-tdeepblue text-white hover:bg-tdeepblue/80 px-6! py-6 gap-2">
          <FaRegUser />
          <p className="text-[16px] font-[500]">Sign In</p>
        </Button>
      </div>

      <div className="lg:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <GiHamburgerMenu className="lg:hidden block text-[30px] text-tdeepblue" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-20 px-6">
              <ul className=" flex flex-col gap-6 text-tcolor font-[500]">
                <Link className="hover:text-tblue-2" href="/">
                  <li>Home</li>
                </Link>
                <Link className="hover:text-tblue-2" href="/listings">
                  <li>Listings</li>
                </Link>
                <Link className="hover:text-tblue-2" href="/agencies">
                  <li>Agencies</li>
                </Link>
                <Link className="hover:text-tblue-2" href="/pricing">
                  <li>Pricing</li>
                </Link>
              </ul>

              <div className="flex flex-wrap items-center gap-6">
                <span className="flex items-center gap-2 cursor-pointer">
                  <MdOutlineDomainAdd className="text-[25px] text-tgreen " />
                  <p className="text-nowrap text-[16px] text-tblue-2 font-[500]">
                    Add Property
                  </p>
                </span>

                <Button className="flex items-center cursor-pointer bg-tdeepblue text-white hover:bg-tdeepblue/80 px-6! py-6 gap-2">
                  <FaRegUser />
                  <p className="text-[16px] font-[500]">Sign In</p>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
