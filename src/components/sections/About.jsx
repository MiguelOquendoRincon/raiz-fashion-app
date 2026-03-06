import prendaCompleta from "../../assets/prenda_completa.png";

export default function About() {
    return (
        <section id="about" style={{ padding: "var(--section-pad)", background: "var(--color-cream)" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                {/* Text */}
                <div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 16, textTransform: "uppercase" }}>Nuestra Esencia</p>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-text-dark)", fontWeight: 400, lineHeight: 1.2, marginBottom: 28 }}>
                        RAÍZ nace del cuidado
                    </h2>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--color-text-mid)", lineHeight: 1.8 }}>
                        <p style={{ marginBottom: 20 }}>
                            RAÍZ es una propuesta de diseño consciente creada para proteger la piel y respetar la tierra.
                            Desarrollamos prendas en <strong>100% algodón orgánico</strong> pensadas especialmente para niños con piel sensible, brindando comodidad, seguridad y libertad de movimiento.
                        </p>
                        <p style={{ marginBottom: 20, color: "var(--color-dark-green)", fontWeight: 500 }}>
                            Creemos que vestir no es solo cubrir el cuerpo. Es una decisión que impacta la salud, el bienestar y el futuro.
                        </p>
                        <p>
                            Cada detalle fue pensado desde el cuidado: por la piel, por la infancia y por el planeta.
                        </p>
                    </div>
                </div>
                {/* Image */}
                <div style={{ position: "relative" }}>
                    <div style={{
                        width: "100%", aspectRatio: "4/5",
                        borderRadius: 4, overflow: "hidden",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
                    }}>
                        <img src={prendaCompleta.src || prendaCompleta} alt="Esencia RAÍZ" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <svg style={{ position: "absolute", bottom: -40, right: -30, opacity: 0.12 }} width="160" height="240" viewBox="0 0 200 300">
                        <path d="M100 0 Q160 80 120 160 Q80 240 100 300 Q40 220 60 140 Q80 60 100 0Z" fill="var(--color-dark-green)" />
                    </svg>
                </div>
            </div>
        </section>
    );
}
