"use client";

import { useContext } from "react";
import Link from 'next/link';
import AuthContext from "@/context/AuthContext";
import Common_Banner from "@/components/common/Common_Banner";

const LoginPage = () => {
    const { loginUser } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        username.length > 0 && loginUser(username, password);
    };

  return (
        <div className="login__main">
            <div className="login__inner">
                <section>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <hr/>
                        <div className="login__input">
                            <label htmlFor="username" style={{'marginTop' : '0vh'}}>USER NAME</label>
                            <input type="text" id="username" placeholder="Enter Username" />
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" id="password" placeholder="Enter Password" />
                            <div className="login__button">
                                <Link href="/register">Create Account</Link>
                                <button type="submit">
                                    <p>Login</p>
                                </button>
                            </div>
                        </div>
                    </form>
                </section>
            </div>
            <Common_Banner />
        </div>
    );
};

export default LoginPage;