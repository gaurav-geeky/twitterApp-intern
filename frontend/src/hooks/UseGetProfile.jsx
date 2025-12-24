
import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMyProfile } from '../redux/userSlice';



const useGetProfile = (id) => {

    const dispatch = useDispatch();

    useEffect(() => {
        if (!id) return;

        const fetchMyProfile = async () => {
            try {
                const api = `${import.meta.env.VITE_BACK}/user/profile/${id}`;
                const response = await axios.get(api, {
                    withCredentials: true
                });
                console.log(response.data); 
                dispatch(getMyProfile(response.data.user));
                console.log("my user fetch profile", response.data.user);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchMyProfile();
    }, [id]);

};

export default useGetProfile; 
