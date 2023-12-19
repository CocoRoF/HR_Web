"use client";

import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";

export const useAxios = () => {
    const { authTokens, axiosHeader, setAxiosHeader, setUser, setAuthTokens, setCookie } = useContext(AuthContext);

    const axiosInstance = axios.create({
        baseURL: "http://localhost:8080/api/account",
        headers: { Authorization: axiosHeader } 
    });

    axiosInstance.interceptors.request.use(async req => {
        const user = jwtDecode(authTokens.access);
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
        console.log("Axios Get Requset")

        if (!isExpired) return req;

        const response = await axios.post('http://localhost:8080/api/account/token/refresh/', {
            refresh: authTokens.refresh
        }); 

        setCookie('authTokens', response.data, {path: '/', expires: new Date(Date.now() + (30 * 60 * 1000))});
        setAuthTokens(response.data);
        setUser(jwtDecode(response.data.access));
        setAxiosHeader(`Bearer ${response.data.access}`);

        req.headers.Authorization = `Bearer ${response.data.access}`;
        return req;
    });

    return axiosInstance;
};