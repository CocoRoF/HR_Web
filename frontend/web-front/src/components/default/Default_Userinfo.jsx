"use client";

import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { userInfoAuthorization } from "@/utils/userInfoAuthorization";

function UserInfo() {
  const { user, logoutUser } = useContext(AuthContext);
  const [isAuth, isLoading] = userInfoAuthorization();

  if (isLoading) {
    return (<div style={{'alignSelf' : 'center'}}>Loading User</div>)
  }

  return (
    <>{user&&isAuth ?
      <> 
        <div className="user__info">
          <b>WELCOME</b>
          <Link href="/user/mypage">{user.username}</Link>
        </div>
        <div className="user__logout" onClick={logoutUser}>Logout</div>
      </> : 
      <>
        <Link className="user__register" href="/register">Register</Link>
        <Link className="user__login" href="/login">Sign In</Link>
      </>
    }
    </>
  );
}

export default UserInfo;