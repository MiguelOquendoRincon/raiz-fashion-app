"use client";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Collection from "../components/sections/Collection";
import Gallery from "../components/sections/Gallery";
import Process from "../components/sections/Process";
import Contact from "../components/sections/Contact";

export default function Home() {
    return (
        <div style={{ background: "var(--color-cream)", overflowX: "hidden" }}>
            <Navbar />
            <Hero />
            <About />
            <Collection />
            <Gallery />
            <Process />
            <Contact />
            <Footer />
        </div>
    );
}