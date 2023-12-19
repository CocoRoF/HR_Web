"use client";
import { useState, useContext, useEffect } from 'react';
import AuthContext from "@/context/AuthContext";

export const userCheck = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const tryAuth = async () => {
      if (user) {
        setIsAuth(true);
        setIsLoading(false);

      }
      else {
        setIsLoading(false);
      }
    };

    tryAuth();
  }, [user]);

  return [isAuth, isLoading];
};
