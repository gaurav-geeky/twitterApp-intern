import React from 'react'

const Login = () => {
    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center'>

                <div className='flex items-center justify-around w-[80%] '>
                    <div>
                        <img className='ml-5' width={"280px"} src="https://images.seeklogo.com/logo-png/49/2/twitter-x-logo-png_seeklogo-492397.png" alt="twitterlogo" />
                    </div>

                    <div>
                        <div>
                            <h1 className='text-[64px] font-bold '>Happening now</h1>
                        </div>
                        <h1 className='my-2 text-xl font-bold'>Login</h1>
                        <form className='flex flex-col w-[50%]'>
                            <input type="text" placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                            <input type="text" placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                            <input type="text" placeholder='Email' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                            <input type="text" placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login
