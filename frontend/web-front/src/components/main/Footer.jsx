import React from "react";

import { footerText } from "@/constants/layout";

const Footer = () => {
    return (
    <footer id="footer" role="contentinfo">
        <div className="footer__inner">
            <div className="footer__info">
                <div className="left">
                    <div className="title">
                        <a href="#">sign up</a>
                    </div>
                    <p className="left__text">회원가입을 하시면 모든 기능을 이용하실 수 있습니다.</p>
                </div>
                <div className="right">
                    <h3>Other Site</h3>
                    <ul>
                        {footerText.map((footer, index) => (
                            <li key={index}>
                                <a href={footer.link} target="_blank">{footer.title}</a>
                                <em>{footer.desc}</em>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="footer__right">
                <a href="https://github.com/webstoryboy" target="_blank">© 2023 webstoryboy</a>
            </div>
        </div>
    </footer>
    )
}

export default Footer