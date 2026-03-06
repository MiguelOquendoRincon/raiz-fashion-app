export default function About() {
    return (
        <section id="about" style={{ padding: "var(--section-pad)", background: "var(--color-cream)" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                {/* Text */}
                <div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 16, textTransform: "uppercase" }}>Sobre el proyecto</p>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400, lineHeight: 1.3, marginBottom: 28 }}>
                        Explorar la colección<br />desde sus orígenes
                    </h2>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.85, marginBottom: 20 }}>
                        En un mundo que avanza demasiado rápido, esta colección propone un refugio. Aquí, los tejidos ancestrales, las siluetas orgánicas y los procesos artesanales invitan a pausar, escuchar y recordar el lugar del cuerpo en el diseño.
                    </p>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.85, marginBottom: 40 }}>
                        Ya sea que vengas por la técnica, la narrativa o simplemente por la belleza de la forma, cada pieza es una oportunidad de reconectar con lo esencial.
                    </p>
                    <a href="#collection" style={{
                        fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, padding: "14px 36px",
                        background: "var(--color-dark-green)", color: "#fff", textDecoration: "none", display: "inline-block",
                        transition: "opacity 0.2s",
                    }}
                        onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                        onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                    >EXPLORAR COLECCIÓN</a>
                </div>
                {/* Image placeholder */}
                <div style={{ position: "relative" }}>
                    <div style={{
                        width: "100%", aspectRatio: "4/5",
                        background: "linear-gradient(135deg, #7A8C6E, #3D5A4C)",
                        borderRadius: 4, overflow: "hidden",
                    }}>
                        <img src="https://placehold.co/560/700/4A6741/F5F0E8?text=About+Photo" alt="About" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    {/* Decorative leaf */}
                    <svg style={{ position: "absolute", bottom: -40, right: -30, opacity: 0.12 }} width="160" height="240" viewBox="0 0 200 300">
                        <path d="M100 0 Q160 80 120 160 Q80 240 100 300 Q40 220 60 140 Q80 60 100 0Z" fill="var(--color-dark-green)" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
