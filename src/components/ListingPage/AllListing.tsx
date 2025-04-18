import React from 'react';
import PropertyProps from '../PropertyProps';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { PropertyData } from '@/utils/dummyData';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const ITEMS_PER_PAGE = 6;

const AllListing = ({ currentPage, setCurrentPage, totalItems }: {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
}) => {
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = PropertyData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="flex-1 justify-center">
      <div className="w-full flex flex-wrap lg:justify-start justify-center items-center mt-10 mb-7 gap-y-10 gap-x-5">
        {currentItems.map((property, index) => (
          <PropertyProps
            key={index}
            {...property}
          />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            {/* <PaginationPrevious  href="#" onClick={() => setCurrentPage(Math.max(1, currentPage - 1))} /> */}
            <BsArrowLeftSquareFill className='text-[30px] text-tblue-2 cursor-pointer mr-4' onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}  />
          </PaginationItem>
          {Array.from({ length: totalPages }, (_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                href="#"
                isActive={currentPage === index + 1}
                onClick={() => setCurrentPage(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          {totalPages > 3 && <PaginationEllipsis />}
          <PaginationItem>
            {/* <PaginationNext href="#" onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} /> */}
            <BsArrowRightSquareFill className='text-[30px] text-tblue-2 cursor-pointer ml-4' onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AllListing;
