import React from 'react'
import { BiArrowBack } from "react-icons/bi";

const Profile = () => {
    return (
        <div className='w-full'>

            <div>
                <div className='flex items-center  '>
                    <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <BiArrowBack size={24} />
                    </div>
                    <div className='ml-2'>
                        <h1 className='text-[20px] font-bold'>Patel</h1>
                        <p className='text-[13px] text-gray-500'>10 posts</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/profile_banners/1952941047803461634/1754452783/1080x360" alt="banner" />
            </div>
        </div>
    )
}

export default Profile
