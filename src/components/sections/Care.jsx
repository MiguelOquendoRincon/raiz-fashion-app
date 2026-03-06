export default function Care() {
    const careSteps = [
        { label: "Agua fría", desc: "Máximo 30°C para cuidar la fibra" },
        { label: "Jabón neutro", desc: "O suave, para pieles sensibles" },
        { label: "Sin blanqueador", desc: "Protege el color natural" },
        { label: "Sin suavizantes", desc: "Evita químicos agresivos" },
        { label: "Secado sombra", desc: "Mantiene la suavidad original" },
        { label: "Sin retorcer", desc: "Evita el desgaste excesivo" }
    ];

    return (
        <>
            <section id="care" style={{ padding: "var(--section-pad)", background: "var(--color-cream)" }}>
                <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)" }}>
                    <div style={{ textAlign: "center", marginBottom: 64 }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 16, textTransform: "uppercase" }}>🤍 Durabilidad</p>
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400 }}>
                            Cómo cuidar tu prenda Raíz
                        </h2>
                        <div style={{ width: 40, height: 1, background: "var(--color-dark-green)", margin: "24px auto 0" }} />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
                        {careSteps.map((step, i) => (
                            <div key={i} style={{
                                background: "#fff", padding: "32px", borderRadius: 4,
                                border: "1px solid var(--color-border)",
                                display: "flex", flexDirection: "column", gap: 8
                            }}>
                                <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--color-mid-green)", letterSpacing: 2 }}>PASO 0{i + 1}</span>
                                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", color: "var(--color-text-dark)", fontWeight: 400 }}>{step.label}</h3>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--color-text-mid)", lineHeight: 1.6 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 64, textAlign: "center" }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", italic: "true" }}>
                            Un cuidado adecuado prolonga la vida de la prenda y mantiene sus propiedades naturales.
                            <br />
                            <strong>Cuidar la prenda también es cuidar el planeta.</strong>
                        </p>
                    </div>
                </div>
            </section>

            {/* Finale Section */}
            <section style={{ padding: "120px 0", background: "#fff" }}>
                <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
                    <h2 style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.5rem, 4vw, 2.2rem)",
                        color: "var(--color-dark-green)",
                        lineHeight: 1.6,
                        fontWeight: 400,
                        letterSpacing: 1
                    }}>
                        Cuidar la piel. Cuidar la tierra. Sembrar futuro.
                    </h2>
                    <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 12 }}>
                        <span style={{ fontSize: 14 }}>🌱</span>
                        <span style={{ fontSize: 14 }}>🤍</span>
                        <span style={{ fontSize: 14 }}>🌍</span>
                    </div>
                </div>
            </section>
        </>
    );
}
