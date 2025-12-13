import { MdHomeFilled } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdOutlineNotifications } from "react-icons/md";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { CiUser } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";



const LeftSidebar = () => {
    return (
        <>
            <div className=" w-[20%] border">

                <div>
                    <div>
                        <img className="ml-3 p-1 hover:bg-gray-200 hover:cursor-pointer rounded-full"

                            width={25} src="https://images.seeklogo.com/logo-png/49/2/twitter-x-logo-png_seeklogo-492397.png" alt="alt" />
                    </div>

                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full ">
                        <div> <MdHomeFilled size={23} /> </div>
                        <h1 className="text-lg ml-2">Home</h1>
                    </div>

                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full ">
                        <div> <CiSearch size={23} /> </div>
                        <h1 className="text-lg ml-2">Explore</h1>
                    </div>

                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full ">
                        <div> < PiBookmarkSimpleThin size={23} /> </div>
                        <h1 className="text-lg ml-2">Notifications</h1>
                    </div>

                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full ">
                        <div> < CiUser size={23} /> </div>
                        <h1 className="text-lg ml-2">Profile</h1>
                    </div>

                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full ">
                        <div> < MdOutlineNotifications size={23} /> </div>
                        <h1 className="text-lg ml-2">Bookmarks</h1>
                    </div>

                    <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-full ">
                        <div> < IoMdLogOut size={23} /> </div>
                        <h1 className="text-lg ml-2">Logout</h1>
                    </div>

                    <button className="px-4 py-2 border-none font-bold text-white text-[15px] bg-[#1D9BF0] w-full rounded-full" >Post</button>


                </div>

            </div>
        </>
    )
}

export default LeftSidebar; 
