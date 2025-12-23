
import React from 'react'
import axios from "axios";
import { useEffect } from 'react';

const UseGetProfile = async (id) => {

    useEffect(async () => {
        try {
            const api = `${import.meta.env.VITE_BACK}/profile/${id}`;
            const response = await axios.get(api, {
                withCredentials: true
            })
        }
        catch (error) {
            console.log(error);
        }
    }, []);

}; 

export default UseGetProfile; 
