"use client";

// import Components
import React, { useEffect } from "react";
import Header from "@/components/common/Common_Header";
import Footer from "@/components/common/Common_Footer"
import Skip from "@/components/common/Common_Skip";
import App from "@/components/common/App";
// import lenis from "@/utils/lenis";
// import link from "@/utils/link";

export default function Project() {
// import Effect
    useEffect(() => {
    }, []);
    
    // html structure
    return (
        <>
            <Skip />
            <Header />
            <main id="main" role="main">
                <App />
            </main>
            <Footer />
        </>
    );
}