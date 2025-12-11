import React from 'react'
import { MdHomeFilled } from "react-icons/md";

const LeftSidebar = () => {
    return (
        <>
            <div>
                <div>
                    <img width={30} src="https://images.seeklogo.com/logo-png/49/2/twitter-x-logo-png_seeklogo-492397.png" alt="" />
                </div>

                <div>
                    <div className='flex items-center'>
                        <MdHomeFilled /> 
                        <h1>Home</h1>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LeftSidebar; 
