"use client";
import React from "react";
import { redirect, usePathname } from "next/navigation";
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
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default LayoutWrapper;
