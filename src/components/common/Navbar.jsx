"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            background: scrolled ? "rgba(245,240,232,0.96)" : "transparent",
            backdropFilter: scrolled ? "blur(8px)" : "none",
            borderBottom: scrolled ? "1px solid var(--color-border)" : "none",
            transition: "all 0.4s ease",
            padding: "0 40px",
        }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 18, color: scrolled ? "var(--color-dark-green)" : "#fff", fontFamily: "var(--font-serif)", letterSpacing: 3, fontWeight: 700 }}>✦ RAÍZ</span>
                    <span style={{ fontSize: 9, color: scrolled ? "var(--color-text-light)" : "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)", letterSpacing: 2, display: "block", marginTop: 2 }}>DISEÑO CONSCIENTE</span>
                </div>
                {/* Desktop links */}
                <div style={{ display: "flex", gap: 36 }}>
                    {NAV_LINKS.map(l => (
                        <a key={l.label} href={l.href} style={{
                            fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 2,
                            color: scrolled ? "var(--color-text-dark)" : "#fff",
                            textDecoration: "none", fontWeight: 500,
                            transition: "opacity 0.2s",
                        }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
                            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                        >{l.label}</a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
