"use client";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Project from "../components/sections/Project";
import Material from "../components/sections/Material";
import Process from "../components/sections/Process";
import Collection from "../components/sections/Collection";
import Gallery from "../components/sections/Gallery";
import Care from "../components/sections/Care";
import Contact from "../components/sections/Contact";
import Closing from "../components/sections/Closing";

export default function Home() {
    return (
        <div style={{ background: "var(--color-cream)", overflowX: "hidden" }}>
            <Navbar />
            <Hero />
            <About />
            <Project />
            <Material />
            <Process />
            <Collection />
            <Gallery />
            <Care />
            <Contact />
            <Closing />
            <Footer />
        </div>
    );
}