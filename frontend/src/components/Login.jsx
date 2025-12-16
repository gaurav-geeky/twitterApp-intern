import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Login = () => {
    const [islogin, setIslogin] = useState(true);
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");


    const loginSignupHandler = () => {
        setIslogin(!islogin);
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (islogin) {
            // login
            try {
                let api = `${import.meta.env.VITE_BACK}/login`;
                const response = await axios.post(api, { email, password }, {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    withCredentials: true
                });
                dispatch(getUser(response?.data?.user));
                if (response.data.success) {
                    navigate("/");
                    alert(response.data.msg);
                }
            } catch (error) {
                alert(error.response.data.msg);
                console.log(error);
            }
        } else {
            // signup
            try {

                let api = `${import.meta.env.VITE_BACK}/register`;
                const response = await axios.post(api, { name, username, email, password }, {
                    headers: {
                        'Content-Type': "application/json"
                    },
                    withCredentials: true
                });
                if (response.data.success) {
                    setIslogin(true);
                    alert(response.data.msg);
                }
            } catch (error) {
                alert(error.response.data.msg);
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
                        <form onSubmit={submitHandler} className='flex flex-col w-[55%] '>

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

                                <input value={password} onChange={(e) => setpassword(e.target.value)} type="text" placeholder='Password' className='outline-blue-500 border border-gray-800 px-3 py-1 rounded-full my-1 font-semibold' />
                            </div>

                            <button className='bg-[#1D9BF0] border-none py-1 my-4 rounded-full text-lg text-white'>{islogin ? "Login" : "Create account"}</button>
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
