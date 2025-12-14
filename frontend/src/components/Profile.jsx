import React from 'react'
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Avatar from 'react-avatar'


const Profile = () => {


    return (
        <div className='w-full'>

            <div>
                <div className='flex items-center  '>
                    <Link to="/" className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
                        <BiArrowBack size={24} />
                    </Link>
                    <div className='ml-2'>
                        <h1 className='text-xl font-bold'>Patel</h1>
                        <p className='text-[13px] text-gray-500'>10 posts</p>
                    </div>
                </div>
                <img src="https://pbs.twimg.com/profile_banners/1952941047803461634/1754452783/1080x360" alt="bg-banner" />

                <div className='absolute top-52 ml-2 border-4 border-white rounded-full '>
                    <Avatar src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" size="120" round={true} />
                </div>
                <div className='text-right m-4'>
                    <button className='px-4 py-1 hover:bg-gray-200 rounded-full border-2 border-gray-300 font-bold text-xl'>Edit Profile</button>
                </div>
                <div className='m-4'>
                    <h1 className='font-bold text-xl'>Patel</h1>
                    <p>@patelmernstack</p>
                </div>
                <div className='m-4 text-sm'>
                    <p>🌐 Exploring the web's endless possibilities with MERN Stack 🚀 | Problem solver by day, coder by night 🌙 | Coffee lover ☕ | Join me on this coding journey!</p>

                </div>
            </div>
        </div>
    )
}

export default Profile
