export default function Hero() {
    return (
        <section id="home" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            {/* BG placeholder */}
            <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(160deg, #7A8C6E 0%, #3D5A4C 40%, #1C2E28 100%)",
            }} />
            {/* Overlay */}
            <div style={{ position: "absolute", inset: 0, background: "rgba(20,30,25,0.35)" }} />
            {/* Decorative leaf shapes */}
            <svg style={{ position: "absolute", top: "10%", right: "5%", opacity: 0.15 }} width="200" height="300" viewBox="0 0 200 300">
                <path d="M100 0 Q160 80 120 160 Q80 240 100 300 Q40 220 60 140 Q80 60 100 0Z" fill="white" />
            </svg>
            <svg style={{ position: "absolute", bottom: "15%", left: "3%", opacity: 0.1, transform: "rotate(-30deg) scaleX(-1)" }} width="160" height="240" viewBox="0 0 200 300">
                <path d="M100 0 Q160 80 120 160 Q80 240 100 300 Q40 220 60 140 Q80 60 100 0Z" fill="white" />
            </svg>

            {/* Content */}
            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", textAlign: "center", padding: "0 24px" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, letterSpacing: 4, color: "rgba(255,255,255,0.75)", marginBottom: 24, textTransform: "uppercase" }}>
                    Proyecto de Grado · Diseño de Modas 2025
                </p>
                <h1 style={{
                    fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 6vw, 5rem)",
                    color: "#fff", lineHeight: 1.2, maxWidth: 780,
                    fontWeight: 400, margin: "0 0 28px",
                    textShadow: "0 2px 24px rgba(0,0,0,0.3)",
                }}>
                    Donde la tela se convierte<br />en lenguaje y el diseño en voz.
                </h1>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "rgba(255,255,255,0.72)", letterSpacing: 1, marginBottom: 48, maxWidth: 460, lineHeight: 1.7 }}>
                    Una colección que explora la identidad, la memoria y la forma a través de la moda contemporánea.
                </p>
                <div style={{ display: "flex", gap: 16 }}>
                    <a href="#collection" style={{
                        fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, padding: "14px 36px",
                        background: "var(--color-dark-green)", color: "#fff", textDecoration: "none",
                        border: `1px solid var(--color-dark-green)`, transition: "all 0.3s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "var(--color-dark-green)"; }}
                    >VER COLECCIÓN</a>
                    <a href="#about" style={{
                        fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, padding: "14px 36px",
                        background: "transparent", color: "#fff", textDecoration: "none",
                        border: "1px solid rgba(255,255,255,0.5)", transition: "all 0.3s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                    >CONOCER MÁS</a>
                </div>
            </div>

            {/* Badge */}
            <div style={{
                position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)", zIndex: 10,
                width: 60, height: 60, borderRadius: "50%",
                background: "var(--color-dark-green)", border: `3px solid var(--color-cream)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column",
            }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: 9, color: "#fff", letterSpacing: 1, textAlign: "center", lineHeight: 1.3 }}>ÉLARA<br />2025</span>
            </div>
        </section>
    );
}
