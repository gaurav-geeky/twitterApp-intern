import React from 'react'
import Avatar from 'react-avatar';
import { FaRegComment } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";



const Tweet = () => {
    return (
        <>
            <div className='border-b border-gray-200'>
                <div className='flex p-4'>
                    <Avatar src="https://img.freepik.com/premium-vector/cute-woman-avatar-profile-vector-illustration_1058532-14592.jpg" size="40" round={true} />
                    <div className='ml-2 w-full'>
                        <div className='flex items-center'>
                            <h1 className='font-bold'> shivani patel</h1>
                            <p className='text-gray-500 text-sm ml-2'>@shivanipatel</p>
                        </div>
                        <div>
                            <p>Hello developers let's connect and grow together. </p>
                        </div>
                        <div className='flex justify-between my-3'>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-green-100 rounded-full cursor-pointer'>
                                    <FaRegComment size={20} />
                                </div>
                                <p>0</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-red-100 rounded-full cursor-pointer'>
                                    <CiHeart size={20} />
                                </div>
                                <p>12</p>
                            </div>
                            <div className='flex items-center'>
                                <div className='p-2 hover:bg-blue-100 rounded-full cursor-pointer'>
                                    <CiBookmark size={20} />
                                </div>
                                <p>4</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Tweet;

