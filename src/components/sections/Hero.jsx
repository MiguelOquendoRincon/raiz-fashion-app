export default function Hero() {
    return (
        <section id="home" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
            {/* Image Background */}
            <div style={{
                position: "absolute", inset: 0,
                background: "url('/assets/model-9.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }} />
            <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(160deg, rgba(122, 140, 110, 0.4) 0%, rgba(61, 90, 76, 0.6) 40%, rgba(28, 46, 40, 0.8) 100%)",
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
                    Piel sensible · Algodón Orgánico · Cuidado Consciente
                </p>
                <h1 style={{
                    fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 6vw, 4.5rem)",
                    color: "#fff", lineHeight: 1.1, maxWidth: 850,
                    fontWeight: 400, margin: "0 0 28px",
                    textShadow: "0 2px 24px rgba(0,0,0,0.3)",
                }}>
                    Raíz nace del cuidado
                </h1>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "rgba(255,255,255,0.85)", letterSpacing: 0.5, marginBottom: 48, maxWidth: 540, lineHeight: 1.6 }}>
                    Protegiendo la piel de los más pequeños mientras respetamos el pulso de la tierra.
                </p>
                <div style={{ display: "flex", gap: 16 }}>
                    <a href="#about" style={{
                        fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, padding: "14px 36px",
                        background: "var(--color-dark-green)", color: "#fff", textDecoration: "none",
                        border: `1px solid var(--color-dark-green)`, transition: "all 0.3s",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#fff"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "var(--color-dark-green)"; }}
                    >DESCUBRE RAÍZ</a>
                </div>
            </div>

            {/* Badge */}
            <div style={{
                position: "absolute", bottom: -28, left: "50%", transform: "translateX(-50%)", zIndex: 10,
                width: 70, height: 70, borderRadius: "50%",
                background: "var(--color-dark-green)", border: `3px solid var(--color-cream)`,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexDirection: "column",
            }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: 10, color: "#fff", letterSpacing: 1, textAlign: "center", lineHeight: 1.3 }}>RAÍZ<br />2025</span>
            </div>
        </section>
    );
}
