import React from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from 'react-avatar';



const RightSidebar = () => {
  return (
    <div className=" w-full ">

      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none'>
        <CiSearch />
        <input className='bg-transparent outline-none px-2' type="text" placeholder='Search' />
      </div>

      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'> Who to follow </h1>

        {/* first person */}
        <div className='flex items-center justify-between my-3 '>
          <div className='flex'>
            <div>
              <Avatar src="https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg" size="40" round={true} />
            </div>

            <div className='ml-2'>
              <h1 className='font-bold'>Patel</h1>
              <p className='text-sm'> @patelmernstack</p>
            </div>
          </div>

          <div>
            <button className='px-4 py-1 bg-black font-bold text-white rounded-full'> Profile</button>
          </div>
        </div>

        {/* second person */}
        <div className='flex items-center justify-between my-3 '>
          <div className='flex'>
            <div>
              <Avatar src="https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg" size="40" round={true} />
            </div>

            <div className='ml-2'>
              <h1 className='font-bold'>Patel</h1>
              <p className='text-sm'> @patelmernstack</p>
            </div>
          </div>

          <div>
            <button className='px-4 py-1 bg-black font-bold text-white rounded-full'> Profile</button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default RightSidebar; 
