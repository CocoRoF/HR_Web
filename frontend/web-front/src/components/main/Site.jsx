import React from "react";

import { siteText } from "@/constants/layout";

const Site = () => {
    return (
        <section id="site">
            <div className="site__inner">
                <h2 className="site__title">
                    Research & Project
                </h2>
                <div className="site__wrap">
                    {siteText.map((site, index) => (
                        <div className={`site__item s${index + 1}`} key={index}>
                            <span className="num">{index + 1}.</span>
                            <div className="text__head">
                                <div>{site.text[0]}</div>
                            </div>
                            <div className="text">
                                <div>{site.text[1]}</div>
                                <div>{site.text[2]}</div>
                            </div>
                            <h3 className="title">
                                {site.title}
                            </h3>
                            <div className="btn">
                                <a href={site.code} target="_blank">code</a>
                                <a href={site.view} target="_blank">view</a>
                            </div>
                            <div className="info">
                                <span>{site.info[0]}</span>
                                <span>{site.info[1]}</span>
                                <span>{site.info[2]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Site