import { useState, useContext, useEffect } from 'react';
import AuthContext from "@/context/AuthContext";
import { useRouter } from 'next/navigation';

export const userAuthorization = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { cookies, logoutUser, clearUserInfo, refreshToken } = useContext(AuthContext);
  const axiosInstance = refreshToken(true);
  const router = useRouter();

  useEffect(() => {
    const fetchAuth = async () => {
      if (cookies.authTokens) {
        console.log(cookies.authTokens)
        let status;
        try {
          const response = await axiosInstance.post('/test/');
          status = response.status;
          console.log(status)
        } 
        catch (error) {
          logoutUser();
        } 
        finally {
          if (status === 200) {
            setIsAuth(true);
          } 
          else {
            clearUserInfo();
            router.push('/login');
          }
        }
      }
      else {
        clearUserInfo();
        router.push('/login');
      }
    };

    fetchAuth();
  }, [cookies.authTokens]);

  return isAuth;
};
