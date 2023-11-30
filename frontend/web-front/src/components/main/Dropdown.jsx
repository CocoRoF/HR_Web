import React, {useState} from "react";
import { headerNav } from "@/constants/layout";

function Dropdown () {
    const [show, setShow] = useState(false);
    const toggleMenu = () => {
        setShow((prevShow) => !prevShow);
    };

    return (
        <div className="header__nav">
            <nav className={`nav__content ${show ? "show" : ""}`} role="navigation" aria-label="메인 메뉴">
                <ul>
                    {headerNav.map((nav, key) => (
                        <li key={key}>
                            <a href={nav.url}>{nav.title}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div
                className="header__nav__mobile" 
                id="headerToggle" 
                aria-controls="primary-menu" 
                aria-expanded={show ? "true" : "false"}
                role="button"
                tabIndex="0"
                onClick={ toggleMenu }
            >
                <span></span>
            </div>
        </div>
    );
}

export default Dropdown;