export default function Care() {
    const careSteps = [
        "Lavar con agua fría o máximo 30°C",
        "Usar jabón neutro o suave",
        "No utilizar blanqueadores",
        "Evitar suavizantes fuertes",
        "Secar a la sombra",
        "No retorcer excesivamente"
    ];

    return (
        <section id="care" style={{ padding: "var(--section-pad)", background: "var(--color-dark-green)" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "rgba(255,255,255,0.6)", marginBottom: 12, textTransform: "uppercase" }}>Sostenibilidad</p>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#fff", fontWeight: 400 }}>Cómo cuidar tu prenda RAÍZ</h2>
                    <div style={{ width: 48, height: 1, background: "rgba(255,255,255,0.4)", margin: "20px auto 0" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 100, alignItems: "center" }}>
                    {/* List */}
                    <div style={{
                        background: "rgba(255,255,255,0.03)",
                        padding: "50px",
                        borderRadius: 4,
                        border: "1px solid rgba(255,255,255,0.1)"
                    }}>
                        <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                            {careSteps.map((step, i) => (
                                <li key={i} style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 16,
                                    marginBottom: 16,
                                    fontFamily: "var(--font-sans)",
                                    fontSize: 15,
                                    color: "rgba(255,255,255,0.85)"
                                }}>
                                    <span style={{ fontSize: 10, color: "var(--color-mid-green)" }}>✦</span>
                                    {step}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Text/Conclusion */}
                    <div>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 24 }}>
                            Un cuidado adecuado prolonga la vida de la prenda y mantiene sus propiedades naturales.
                        </p>
                        <p style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "1.8rem",
                            color: "#fff",
                            lineHeight: 1.3,
                            fontStyle: "italic"
                        }}>
                            "Cuidar la prenda también es cuidar el planeta."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
