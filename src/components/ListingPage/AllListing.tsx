import { PropertyData } from '@/utils/dummyData'
import React from 'react'
import PropertyProps from '../PropertyProps'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"



const AllListing = () => {
  return (
    <div className='flex-1 justify-center'>
     
      <div className=" w-full flex flex-wrap lg:justify-start justify-center items-center mt-10 mb-7 gap-y-10 gap-x-5  ">
        {PropertyData.slice(0, 6).map((property, index) => (
          <PropertyProps
            key={index}
            listingType={property.listingType}
            title={property.title}
            price={property.price}
            numOfBaths={property.numOfBaths}
            numOfBeds={property.numOfBeds}
            propertyMeter={property.propertyMeter}
            location={property.location}
            images={property.images}
          />
        ))}
      </div>

      <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
  )
}

export default AllListing
