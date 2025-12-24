import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { getUser } from '../redux/userSlice';


const Login = () => {
    const [islogin, setIslogin] = useState(true);
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginSignupHandler = () => {
        setIslogin(!islogin);
    }

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (islogin) {
            // login
            try {
                const api = `${import.meta.env.VITE_BACK}/user/login`;

                const response = await axios.post(api,
                    { email, password },
                    { withCredentials: true }
                );
                dispatch(getUser(response?.data?.user)); 
                
                if (response.data.success) {
                    navigate("/home");
                    toast.success(response.data.msg); 
                    console.log(response?.data?.user);  
                }
            }
            catch (error) {
                toast.error(error.response.data.msg);
                console.log(error);
            }
        }

        else {
            // sign up 
            try {
                const api = `${import.meta.env.VITE_BACK}/user/register`;
                const response = await axios.post(api, { name, username, email, password });
                if (response.data.success) {
                    setIslogin(true);
                    toast.success(response.data.msg);
                }
            }
            catch (error) {
                toast.error(error.response.data.msg);
                console.log(error);
            }
        }
    }


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
                        <h1 className='my-2 text-xl font-bold'>{islogin ? "Login" : "Signup"}</h1>

                        <form className='flex flex-col w-[55%] '>

                            <div className='flex flex-col h-[170px] '>
                                {
                                    !islogin && (
                                        <>
                                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" placeholder='Name' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />

                                            <input value={username} onChange={(e) => setusername(e.target.value)} type="text" placeholder='Username' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                                        </>
                                    )
                                }

                                <input type="email" placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />

                                <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                            </div>

                            <button
                                className='bg-[#1D9BF0] border-none py-1 my-4 rounded-full text-lg text-white'
                                onClick={handlesubmit}>
                                {islogin ? "Login" : "Create account"}
                            </button>

                            <h1>
                                {islogin ? "Do not have an account?" : "Already have an account?"}
                                <span onClick={loginSignupHandler} className='font-bold text-blue-400'> {islogin ? "Signup" : "Login"}</span>
                            </h1>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login; 
