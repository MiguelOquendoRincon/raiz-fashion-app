"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "INICIO", href: "#home" },
    { label: "NOSOTROS", href: "#about" },
    { label: "MATERIAL", href: "#material" },
    { label: "COLECCIÓN", href: "#collection" },
    { label: "GALERÍA", href: "#gallery" },
    { label: "CUIDADOS", href: "#care" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            background: scrolled || mobileMenuOpen ? "rgba(245,240,232,0.98)" : "transparent",
            backdropFilter: scrolled || mobileMenuOpen ? "blur(8px)" : "none",
            borderBottom: (scrolled || mobileMenuOpen) ? "1px solid var(--color-border)" : "none",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            padding: "0 24px",
        }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
                {/* Logo */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#home" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}
                >
                    <div style={{ height: 44, width: "auto", position: "relative", display: "flex", alignItems: "center" }}>
                        <Image
                            src="/assets/brand_logo.png"
                            alt="Raíz Logo"
                            width={44}
                            height={44}
                            style={{
                                height: 44,
                                width: "auto",
                                objectFit: "contain",
                                filter: (scrolled || mobileMenuOpen) ? "none" : "brightness(0) invert(1)"
                            }}
                        />
                    </div>
                    <div className="hide-mobile">
                        <span style={{ fontSize: 16, color: (scrolled || mobileMenuOpen) ? "var(--color-dark-green)" : "#fff", fontFamily: "var(--font-serif)", letterSpacing: 2, fontWeight: 600, display: "block" }}>RAÍZ</span>
                        <span style={{ fontSize: 8, color: (scrolled || mobileMenuOpen) ? "var(--color-text-light)" : "rgba(255,255,255,0.7)", fontFamily: "var(--font-sans)", letterSpacing: 1, textTransform: "uppercase" }}>Diseño Consciente</span>
                    </div>
                </motion.a>

                {/* Desktop links */}
                <div className="hide-mobile" style={{ display: "flex", gap: 32 }}>
                    {NAV_LINKS.map(l => (
                        <motion.a
                            key={l.label}
                            href={l.href}
                            whileHover={{ y: -2 }}
                            style={{
                                fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: 2,
                                color: (scrolled) ? "var(--color-text-dark)" : "#fff",
                                textDecoration: "none", fontWeight: 600,
                                transition: "color 0.3s",
                                position: "relative"
                            }}
                        >
                            {l.label}
                            {/* Hover line would go here if needed */}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    style={{
                        display: "none",
                        background: "none", border: "none", cursor: "pointer",
                        width: 24, height: 24, padding: 0,
                        flexDirection: "column", justifyContent: "center", gap: 6
                    }}
                    className="mobile-toggle"
                >
                    <motion.div animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 7.5 : 0 }} style={{ width: "100%", height: 1.5, background: (scrolled || mobileMenuOpen) ? "var(--color-dark-green)" : "#fff" }} />
                    <motion.div animate={{ opacity: mobileMenuOpen ? 0 : 1 }} style={{ width: "100%", height: 1.5, background: (scrolled || mobileMenuOpen) ? "var(--color-dark-green)" : "#fff" }} />
                    <motion.div animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -7.5 : 0 }} style={{ width: "100%", height: 1.5, background: (scrolled || mobileMenuOpen) ? "var(--color-dark-green)" : "#fff" }} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        style={{
                            position: "absolute", top: 72, left: 0, right: 0,
                            background: "rgba(245,240,232,0.98)",
                            padding: "40px 24px",
                            display: "flex", flexDirection: "column", gap: 24,
                            borderBottom: "1px solid var(--color-border)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
                        }}
                    >
                        {NAV_LINKS.map((l, i) => (
                            <motion.a
                                key={l.label}
                                href={l.href}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => setMobileMenuOpen(false)}
                                style={{
                                    fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: 3,
                                    color: "var(--color-text-dark)",
                                    textDecoration: "none", fontWeight: 500,
                                }}
                            >{l.label}</motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

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
