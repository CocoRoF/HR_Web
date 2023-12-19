"use client";

// import components
import React, { useEffect } from "react";
import Header from "@/components/main/Header";
import Footer from "@/components/main/Footer";
import Intro from "@/components/main/Intro";
import Aboutme from "@/components/main/Aboutme";
import Site from "@/components/main/Site";
import Port from "@/components/main/Port";
import Contact from "@/components/main/Contact";
import Skip from "@/components/main/Skip";
import lenis from "@/utils/lenis";
import link from "@/utils/link";

export default function Main() {
// import Effect
    useEffect(() => {
        lenis();
        link();
    }, []);
    
    // html structure
    return (
        <>
            <Skip />
            <Header />
            <main id="main" role="main">
                <Intro />
                <Aboutme />
                <Site />
                <Port />
                <Contact />
            </main>
            <Footer />
        </>
    );
}