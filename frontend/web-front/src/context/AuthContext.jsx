// 쿠키는 30분 마감, JWT access 토큰은 5분 마감, JWT refresh 토큰은 1일 마감.
// 그냥 로컬 저장소를 써도 상관없지만, 미동작시 자동 로그아웃 기능을 구현하기 위해 쿠키를 사용함.
// 아무런 동작 없이 30분이 지나는 경우 쿠키가 만료되면서 자동 로그아웃.
// 30분 이내에 다시 동작하는 경우, access 토큰을 재발급하면서 쿠키도 갱신함.
// 사이트 접속 후 1일이 지나면 무조건 다시 로그인 해야함.

"use client";
import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['authTokens']);
    const [authTokens, setAuthTokens] = useState(() => cookies.authTokens ? cookies.authTokens : null);
    const [user, setUser] = useState(() => cookies.authTokens ? jwtDecode(cookies.authTokens.access) : null);
    const [axiosHeader, setAxiosHeader] = useState(() => authTokens ? `Bearer ${authTokens.access}` : null)
    const [loading, setLoading] = useState(true);
    const router = useRouter(); 

    const loginUser = async (username, password) => {
        const response = await fetch("http://localhost:8080/api/account/token/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
            })
        });
        const data = await response.json();

        if (response.status === 200) {
            setAuthTokens(data);
            setUser(jwtDecode(data.access));
            setCookie('authTokens', data, {path: '/', expires: new Date(Date.now() + (30 * 60 * 1000))});
            console.log(cookies.authTokens)
            router.push("/main");
        } 
        else {
            alert("Login Fail. Something wrong.");
        }
    };

    const registerUser = async (username, password, password2) => {
        const response = await fetch("http://localhost:8080/api/account/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password,
                password2
            })
        });
        if (response.status === 201) {
            router.push("/account/login");
        } 
        else {
            alert("Register Fail. Something wrong.");
        }
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        removeCookie('authTokens');
        router.push("/");
    };

    const clearUserInfo = () => {
        setAuthTokens(null);
        setUser(null);
        removeCookie('authTokens');
        console.log('clear user info')
    };

    const refreshToken = () => {
        if (authTokens) {
            console.log(authTokens)
            console.log("axios method start")
            const axiosInstance = axios.create({
                baseURL: "http://localhost:8080/api/account",
                headers: {Authorization: `Bearer ${authTokens.access}`}
            });

            axiosInstance.interceptors.request.use(async req => {
                const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    
                if (!isExpired) {
                    console.log("use exist token")
                    return req;
                }
    
                else {
                    console.log("use refresh token")
                    const response = await axios.post("http://localhost:8080/api/account/token/refresh/", {refresh: authTokens.refresh});
                    console.log(response)
                    setAuthTokens(response.data);
                    setUser(jwtDecode(response.data.access));
                    setCookie('authTokens', response.data, {path: '/', expires: new Date(Date.now() + (30 * 60 * 1000))});
                    setAxiosHeader(`Bearer ${response.data.access}`);
                    req.headers.Authorization = `Bearer ${response.data.access}`;
    
                    return req;
                }
            });
            return axiosInstance;
        }
    }

    const contextData = {
        user,
        setUser,
        cookies,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
        clearUserInfo,
        refreshToken,
    };

    useEffect(() => {
        if (authTokens) {
            setUser(jwtDecode(authTokens.access));
        }
        setLoading(false);
    }, [authTokens, loading]);

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}
