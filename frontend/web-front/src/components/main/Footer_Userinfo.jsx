"use client";

import Link from "next/link";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { userCheck } from "@/utils/userCheck";

function FooterUserInfo() {
    const { user } = useContext(AuthContext);
    const [isAuth, isLoading] = userCheck();

    if (isLoading) {
        return (
              <> 
                    <div className="title">
                        <p>Loading User</p>
                    </div>
                    <p className="left__text">유저 정보를 불러오고 있습니다.</p>
              </>
        )
    }

    return (
        <>{user&&isAuth ?
            <> 
                <div className="title">
                    <Link href="/user/mypage">Welcome! {user.username}</Link>
                </div>
                <p className="left__text">제 홈페이지를 방문해주셔서 감사합니다.</p>
            </> : 
            <>
                <div className="title">
                    <Link href="/login">sign in</Link>
                </div>
                <p className="left__text">로그인하시면 더 많은 기능을 이용하실 수 있습니다.</p>
            </>
        }
        </>
    );
}

export default FooterUserInfo;