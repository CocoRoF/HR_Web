"use client";
import React, { useState } from "react";
import Link from 'next/link'
import { headerMenu } from "@/constants/layout";
import Dropdown from "@/components/main/Dropdown";
import UserInfo from "@/components/default/Default_Userinfo";

const Header = () => {
    const [view, setView] = useState(false);
    const logoMouseOver = () => {setView(true)};
    const logoMouseOut = () => {setView(false)};

    const [menuHovering, setMenuHovering] = useState(false);
    const menuMouseOver = () => {setMenuHovering(true)};
    const menuMouseOut = () => {setMenuHovering(false)};

    return (
        <header id="main__header" role="heading">
            <div className="header__inner" onMouseLeave={logoMouseOut}>
                <div className="header__info">
                    <div className="header__logo" onMouseEnter={logoMouseOver}>
                        <ul>
                            <Link href="/">HARYEOM JANG<em>Home</em></Link>
                        </ul>
                    </div>
                    <div className="header__user">
                        <UserInfo />
                    </div>
                </div>
                <div onMouseEnter={logoMouseOut}></div>
                <nav className={`header__menu ${menuHovering ? "hovering" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerMenu.map((Menu, key) => (
                            <li key={key}>
                                <Link href={Menu.url}>{Menu.title}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div 
                    className="header__nav__mobile" 
                    id="headerToggle" 
                    aria-controls="primary-menu" 
                    aria-expanded={menuHovering ? "true" : "false"}
                    role="button"
                    tabIndex="0"
                    onMouseOver={menuMouseOver}
                    onMouseOut={menuMouseOut}
                >
                    <span></span>
                </div>
            </div>
            <div onMouseEnter={logoMouseOver} onMouseLeave={logoMouseOut}>{view && <Dropdown />}</div>
        </header>
    )
}

export default Header