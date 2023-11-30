import React from "react";

import { aboutmeText } from "@/constants/layout";

const Aboutme = () => {
    return (
    <section id="aboutme">
        <div className="aboutme__inner">
            <h2 className="aboutme__title">WHO I AM<em></em></h2>
            <div className="aboutme__desc">
                {aboutmeText.map((object, index) => (
                    <div key={index}>
                        <span>{index + 1}.</span>
                        <h3>{object.title}</h3>
                        {object.desc.map((desc, idx) => (
                            <p key={idx}>{desc}</p>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}

export default Aboutme