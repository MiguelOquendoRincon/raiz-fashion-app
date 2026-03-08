import { motion } from "framer-motion";
import { Reveal } from "../common/Reveal";

export default function Hero() {
    return (
        <section id="home" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            {/* Image Background */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: "absolute", inset: 0,
                    background: "url('/assets/model-9.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(160deg, rgba(122, 140, 110, 0.4) 0%, rgba(61, 90, 76, 0.6) 40%, rgba(28, 46, 40, 0.8) 100%)",
            }} />
            {/* Overlay */}
            <div style={{ position: "absolute", inset: 0, background: "rgba(20,30,25,0.35)" }} />
            {/* Decorative leaf shapes */}
            <motion.svg
                initial={{ opacity: 0, rotate: -10, y: 20 }}
                animate={{ opacity: 0.15, rotate: 0, y: 0 }}
                transition={{ duration: 1.2, delay: 0.6 }}
                style={{ position: "absolute", top: "10%", right: "5%" }} width="200" height="300" viewBox="0 0 200 300"
            >
                <path d="M100 0 Q160 80 120 160 Q80 240 100 300 Q40 220 60 140 Q80 60 100 0Z" fill="white" />
            </motion.svg>
            <motion.svg
                initial={{ opacity: 0, rotate: 10, y: -20 }}
                animate={{ opacity: 0.1, rotate: -30, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                style={{ position: "absolute", bottom: "15%", left: "3%", transformOrigin: "center" }} width="160" height="240" viewBox="0 0 200 300"
            >
                <path d="M100 0 Q160 80 120 160 Q80 240 100 300 Q40 220 60 140 Q80 60 100 0Z" fill="white" />
            </motion.svg>

            {/* Content */}
            <div className="section-container" style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center" }}>
                <Reveal delay={0.2} width="100%">
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(10px, 2vw, 12px)", letterSpacing: 4, color: "rgba(255,255,255,0.75)", marginBottom: 24, textTransform: "uppercase" }}>
                        Piel sensible · Algodón Orgánico · Cuidado Consciente
                    </p>
                </Reveal>
                <Reveal delay={0.3} width="100%">
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(10px, 2vw, 12px)", letterSpacing: 4, color: "rgba(255,255,255,0.75)", marginBottom: 24, textTransform: "uppercase" }}>
                        Derly Yuliana Barrios Florez · Karol Julieth Márquez Camacho
                    </p>
                </Reveal>
                <Reveal delay={0.4} width="100%">
                    <h1 style={{
                        fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 8vw, 4.5rem)",
                        color: "#fff", lineHeight: 1.1, maxWidth: 850,
                        fontWeight: 400, margin: "0 auto 28px",
                        textShadow: "0 2px 24px rgba(0,0,0,0.2)",
                        textAlign: "center"
                    }}>
                        Raíz nace del cuidado
                    </h1>
                </Reveal>
                <Reveal delay={0.5} width="100%">
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: "clamp(14px, 3vw, 16px)", color: "rgba(255,255,255,0.85)", letterSpacing: 0.5, margin: "0 auto 48px", maxWidth: 540, lineHeight: 1.6, textAlign: "center" }}>
                        Protegiendo la piel de los más pequeños mientras respetamos el pulso de la tierra.
                    </p>
                </Reveal>
                <Reveal delay={0.6} width="100%">
                    <div style={{ display: "flex", gap: 16, justifyContent: "center" }}>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#about" style={{
                                fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, padding: "14px 36px",
                                background: "var(--color-dark-green)", color: "#fff", textDecoration: "none",
                                border: `1px solid var(--color-dark-green)`, transition: "all 0.3s",
                            }}
                            onMouseEnter={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
                            onMouseLeave={e => { e.currentTarget.style.background = "var(--color-dark-green)"; }}
                        >DESCUBRE RAÍZ</motion.a>
                    </div>
                </Reveal>
            </div>

            {/* Badge */}
            <div style={{
                position: "absolute", bottom: -35, left: "50%", transform: "translateX(-50%)", zIndex: 10,
                width: 90, height: 90, borderRadius: "50%",
                background: "#fff", border: `2px solid var(--color-border)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 12px 24px rgba(0,0,0,0.06)"
            }}>
                <img src="/assets/brand_logo.png" alt="Raíz" style={{ width: "70%", height: "auto" }} />
            </div>
        </section>
    );
}
