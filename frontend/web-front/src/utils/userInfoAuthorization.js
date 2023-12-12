import { useState, useContext, useEffect } from 'react';
import AuthContext from "@/context/AuthContext";

export const userInfoAuthorization = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { cookies, clearUserInfo, refreshToken } = useContext(AuthContext);
  const axiosInstance = refreshToken();

  useEffect(() => {
    const fetchAuth = async () => {
      if (cookies.authTokens) {
        let status;
        try {
          const response = await axiosInstance.get('/test/');
          status = response.status;

        } 
        catch (error) {
          clearUserInfo();
        } 
        finally {
          if (status === 200) {
            setIsAuth(true);
            setIsLoading(false);
          } 
          else {
            clearUserInfo();
            setIsLoading(false);
          }
        }
      }
      else {
        console.log(cookies.authTokens)
        clearUserInfo();
        setIsLoading(false);
      }
    };

    fetchAuth();
  }, [cookies.authTokens]);

  return [isAuth, isLoading];
};
