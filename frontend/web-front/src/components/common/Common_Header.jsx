import React, {useState} from "react";
import { headerMenu } from "@/constants/layout";

const Header = () => {
    const [menuHovering, setMenuHovering] = useState(false);
    const menuMouseOver = () => {
        setMenuHovering(true);
      };
    const menuMouseOut = () => {
        setMenuHovering(false);
      };

    return (
        <header id="header" role="heading">
            <div className="header__inner">
                <div className="header__logo">
                    <ul>
                        <a href="/">HARYEOM JANG<em>Home</em></a>
                    </ul>
                </div>
                <nav className={`header__menu ${menuHovering ? "hovering" : ""}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerMenu.map((Menu, key) => (
                            <li key={key}>
                                <a href={Menu.url}>{Menu.title}</a>
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
        </header>
    )
}

export default Header