import React from 'react'
import Sidebar from './Sidebar'
import AllListing from './AllListing'

const ListingLayout = () => {
  return (
    <div className='flex items-start bg-[#f7f9fc] gap-10 px-28 py-20'>
      <Sidebar/>
      <AllListing/>
    </div>
  )
}

export default ListingLayout
