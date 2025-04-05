"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      {pathname.startsWith("/register") || pathname.startsWith("/login") ? (
        <>{children}</>
      ) : (
        <>
          <Navbar />
          <div className="pt-[5em]">
          {children}
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
