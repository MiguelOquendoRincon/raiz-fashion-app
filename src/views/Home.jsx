"use client";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Material from "../components/sections/Material";
import Collection from "../components/sections/Collection";
import Care from "../components/sections/Care";
import Gallery from "../components/sections/Gallery";
import Contact from "../components/sections/Contact";

export default function Home() {
    return (
        <div style={{ background: "var(--color-cream)", overflowX: "hidden" }}>
            <Navbar />
            <Hero />
            <About />
            <Material />
            <Collection />
            <Care />
            <Gallery />
            <Contact />
            <Footer />
        </div>
    );
}