"use client";

// import Components
import React, { useEffect } from "react";
import Header from "@/components/common/Common_Header";
import Footer from "@/components/common/Common_Footer"
import Board from "@/components/paper/Board";
import Skip from "@/components/common/Common_Skip";
// import lenis from "@/utils/lenis";
// import link from "@/utils/link";

export default function Paper() {
// import Effect
    useEffect(() => {
    }, []);
    
    // html structure
    return (
        <>
            <Skip />
            <Header />
            <main id="main" role="main">
                <Board />
            </main>
            <Footer />
        </>
    );
}