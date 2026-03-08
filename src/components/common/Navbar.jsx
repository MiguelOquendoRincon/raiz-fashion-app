"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../data/navigation";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            background: scrolled || mobileMenuOpen ? "rgba(245,240,232,0.98)" : "transparent",
            backdropFilter: scrolled || mobileMenuOpen ? "blur(8px)" : "none",
            borderBottom: (scrolled || mobileMenuOpen) ? "1px solid var(--color-border)" : "none",
            transition: "all 0.4s ease",
            padding: "0 24px",
        }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
                {/* Logo */}
                <a href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
                    <img src="/assets/brand_logo.png" alt="Raíz Logo" style={{ height: 44, width: "auto", objectFit: "contain", filter: (scrolled || mobileMenuOpen) ? "none" : "brightness(0) invert(1)" }} />
                    <div className="hide-mobile">
                        <span style={{ fontSize: 16, color: (scrolled || mobileMenuOpen) ? "var(--color-dark-green)" : "#fff", fontFamily: "var(--font-serif)", letterSpacing: 2, fontWeight: 600, display: "block" }}>RAÍZ</span>
                        <span style={{ fontSize: 8, color: (scrolled || mobileMenuOpen) ? "var(--color-text-light)" : "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)", letterSpacing: 1, textTransform: "uppercase" }}>Diseño Consciente</span>
                    </div>
                </a>

                {/* Desktop links */}
                <div className="hide-mobile" style={{ display: "flex", gap: 36 }}>
                    {NAV_LINKS.map(l => (
                        <a key={l.label} href={l.href} style={{
                            fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: 2,
                            color: (scrolled) ? "var(--color-text-dark)" : "#fff",
                            textDecoration: "none", fontWeight: 600,
                            transition: "opacity 0.2s",
                        }}
                            onMouseEnter={e => (e.currentTarget.style.opacity = "0.6")}
                            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                        >{l.label}</a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: "none",
                        background: "none", border: "none", cursor: "pointer",
                        width: 24, height: 24, padding: 0,
                        flexDirection: "column", justifyContent: "space-between"
                    }}
                    className="mobile-toggle"
                >
                    <div style={{ width: "100%", height: 1, background: (scrolled || mobileMenuOpen) ? "var(--color-dark-green)" : "#fff", transition: "0.3s" }} />
                    <div style={{ width: "100%", height: 1, background: (scrolled || mobileMenuOpen) ? "var(--color-dark-green)" : "#fff", transition: "0.3s" }} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div style={{
                    position: "absolute", top: 72, left: 0, right: 0,
                    background: "rgba(245,240,232,0.98)",
                    padding: "40px 24px",
                    display: "flex", flexDirection: "column", gap: 24,
                    borderBottom: "1px solid var(--color-border)",
                    animation: "fadeIn 0.3s ease-out"
                }}>
                    {NAV_LINKS.map(l => (
                        <a key={l.label} href={l.href}
                            onClick={() => setMobileMenuOpen(false)}
                            style={{
                                fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: 3,
                                color: "var(--color-text-dark)",
                                textDecoration: "none", fontWeight: 500,
                            }}>{l.label}</a>
                    ))}
                </div>
            )}

            <style jsx>{`
                @media (max-width: 991px) {
                    .hide-mobile { display: none !important; }
                    .mobile-toggle { display: flex !important; }
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </nav>
    );
}
