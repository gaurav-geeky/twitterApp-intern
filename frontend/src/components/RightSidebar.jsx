import React from 'react';
import { CiSearch } from "react-icons/ci";



const RightSidebar = () => {
  return (
    <div className=" w-[20%] border">

      <div className='flex items-center p-2 border-gray-300 border-2 rounded-full outline-none'>
        <CiSearch />
        <input className='bg-transparent outline-none px-2'
          type="text"
          placeholder='Search' />
      </div>
    </div>
  )
}

export default RightSidebar; 
