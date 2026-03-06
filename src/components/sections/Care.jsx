import { Droplets, Wind, ShieldOff, Sun, RefreshCw, FlaskConical } from "lucide-react";

export default function Care() {
    const careSteps = [
        { label: "Agua fría", desc: "Máximo 30°C para cuidar la fibra", icon: <Droplets size={20} strokeWidth={1.5} /> },
        { label: "Jabón neutro", desc: "O suave, para pieles sensibles", icon: <FlaskConical size={20} strokeWidth={1.5} /> },
        { label: "Sin blanqueador", desc: "Protege el color natural", icon: <ShieldOff size={20} strokeWidth={1.5} /> },
        { label: "Sin suavizantes", desc: "Evita químicos agresivos", icon: <RefreshCw size={20} strokeWidth={1.5} /> },
        { label: "Secado sombra", desc: "Mantiene la suavidad original", icon: <Sun size={20} strokeWidth={1.5} /> },
        { label: "Sin retorcer", desc: "Evita el desgaste excesivo", icon: <Wind size={20} strokeWidth={1.5} /> }
    ];

    return (
        <>
            <section id="care" style={{ padding: "var(--section-pad)", background: "var(--color-cream)", position: "relative" }}>
                <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)" }}>
                    <div style={{ textAlign: "center", marginBottom: 72 }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: 4, color: "var(--color-mid-green)", marginBottom: 16, textTransform: "uppercase", fontWeight: 600 }}>Cuidado de la fibra</p>
                        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--color-text-dark)", fontWeight: 400, letterSpacing: -0.5 }}>
                            Longevidad & Esencia
                        </h2>
                        <div style={{ width: 32, height: 1, background: "var(--color-dark-green)", margin: "24px auto 0", opacity: 0.6 }} />
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
                        {careSteps.map((step, i) => (
                            <div key={i}
                                onMouseEnter={e => {
                                    e.currentTarget.style.transform = "translateY(-8px)";
                                    e.currentTarget.style.borderColor = "var(--color-mid-green)";
                                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.04)";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.borderColor = "var(--color-border)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                                style={{
                                    background: "#fff", padding: "48px 40px", borderRadius: 2,
                                    border: "1px solid var(--color-border)",
                                    display: "flex", flexDirection: "column", gap: 12,
                                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                                    cursor: "default"
                                }}>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                        <span style={{ fontFamily: "var(--font-serif)", fontSize: 13, color: "var(--color-mid-green)", fontStyle: "italic", opacity: 0.8 }}>0{i + 1}</span>
                                        <div style={{ height: 1, width: 20, background: "var(--color-border)" }} />
                                    </div>
                                    <div style={{ color: "var(--color-mid-green)", opacity: 0.7 }}>{step.icon}</div>
                                </div>
                                <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.35rem", color: "var(--color-text-dark)", fontWeight: 400 }}>{step.label}</h3>
                                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.7, opacity: 0.85 }}>{step.desc}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 80, textAlign: "center", borderTop: "1px solid var(--color-border)", paddingTop: 48 }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--color-text-light)", letterSpacing: 0.5, lineHeight: 2 }}>
                            Un cuidado pausado prolonga la vida de la prenda y mantiene su pureza natural.
                            <br />
                            <span style={{ color: "var(--color-dark-green)", fontWeight: 500, letterSpacing: 1 }}>CUIDAR LA PRENDA ES CUIDAR EL PLANETA</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* Finale Section */}
            <section style={{ padding: "160px 0", background: "#fff", borderTop: "1px solid var(--color-cream)" }}>
                <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
                    <h2 style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
                        color: "var(--color-dark-green)",
                        lineHeight: 1.4,
                        fontWeight: 400,
                        letterSpacing: -0.5
                    }}>
                        Cuidar la piel. Cuidar la tierra.<br />Sembrar futuro.
                    </h2>
                    <div style={{ marginTop: 56, display: "flex", justifyContent: "center", alignItems: "center", gap: 24, opacity: 0.4 }}>
                        <div style={{ height: 1, width: 40, background: "var(--color-dark-green)" }} />
                        <span style={{ fontSize: 12, letterSpacing: 6, color: "var(--color-dark-green)", fontWeight: 600 }}>RAÍZ</span>
                        <div style={{ height: 1, width: 40, background: "var(--color-dark-green)" }} />
                    </div>
                </div>
            </section>
        </>
    );
}
