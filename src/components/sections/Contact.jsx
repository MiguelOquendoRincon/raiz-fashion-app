export default function Contact() {
    return (
        <section id="contact" style={{ padding: "var(--section-pad)", background: "#fff" }}>
            <div style={{ maxWidth: 620, margin: "0 auto", padding: "var(--container-padding)", textAlign: "center" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 16 }}>CONTACTO</p>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "var(--color-text-dark)", fontWeight: 400, marginBottom: 20 }}>
                    ¿Quieres conocer más<br />sobre el proyecto?
                </h2>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.8, marginBottom: 48 }}>
                    Si tienes preguntas sobre la colección, el proceso creativo o simplemente quieres conectar, estamos disponibles.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 48 }}>
                    {["Instagram", "Behance", "Email"].map(s => (
                        <a key={s} href="#" style={{
                            fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 2, padding: "13px 28px",
                            border: `1px solid var(--color-border)`, color: "var(--color-text-dark)", textDecoration: "none",
                            transition: "all 0.3s",
                        }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = "var(--color-dark-green)";
                                e.currentTarget.style.color = "#fff";
                                e.currentTarget.style.borderColor = "var(--color-dark-green)";
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = "transparent";
                                e.currentTarget.style.color = "var(--color-text-dark)";
                                e.currentTarget.style.borderColor = "var(--color-border)";
                            }}
                        >{s.toUpperCase()}</a>
                    ))}
                </div>
                <div style={{ width: 48, height: 1, background: "var(--color-border)", margin: "0 auto" }} />
            </div>
        </section>
    );
}
