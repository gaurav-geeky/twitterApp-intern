import Avatar from 'react-avatar'
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
    return (
        <div className='w-[100%]'>

            <div >
                <div className='flex items-center justify-evenly border border-gray-200 border-t-0'>

                    <div className='cursor-pointer hover:bg-gray-200 w-full px-4 py-2 text-center'>
                        <h1 className='font-semibold text-gray-600 text-lg'>For you</h1>
                    </div>
                    <div className='cursor-pointer hover:bg-gray-200 w-full px-4 py-2 text-center'>
                        <h1 className='font-semibold text-gray-600 text-lg'>Following</h1>
                    </div>

                </div>

                <div className=''>
                    <div className='flex items-center p-4'>
                        <div>
                            <Avatar src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4855.jpg" size="40" round={true} />
                        </div>
                        <input type="text" className='w-full outline-none border-none text-xl ml-2' placeholder='What is happening?' />
                    </div>

                    <div className='flex items-center justify-between p-4 border-b border-gray-300'>
                        <div>
                            <CiImageOn size={24} />
                        </div>
                        <button className='bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full'>Post</button>
                    </div>

                </div>


                <div>
                    
                </div>
            </div>



        </div>
    )
}

export default CreatePost
