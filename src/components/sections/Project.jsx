import { PROJECT_DETAILS } from "../../data/project";

export default function Project() {
    return (
        <section id="project" style={{ padding: "var(--section-pad)", background: "var(--color-cream)" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)" }}>

                {/* Encabezado del Proyecto */}
                <div style={{ textAlign: "center", marginBottom: 80 }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 12, textTransform: "uppercase" }}>Diseño Infantil Modular</p>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--color-text-dark)", fontWeight: 400, marginBottom: 24 }}>
                        {PROJECT_DETAILS.title}
                    </h2>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--color-text-mid)", maxWidth: 700, margin: "0 auto", lineHeight: 1.7 }}>
                        {PROJECT_DETAILS.description}
                    </p>
                </div>

                {/* Características del Diseño */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
                    {PROJECT_DETAILS.features.map((feature, index) => (
                        <div key={feature.id} style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            <div style={{
                                width: "100%",
                                aspectRatio: "3/4",
                                backgroundColor: "var(--color-border)",
                                borderRadius: 4,
                                overflow: "hidden",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.05)"
                            }}>
                                <img
                                    src={feature.img}
                                    alt={feature.title}
                                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                />
                            </div>
                            <div>
                                <span style={{
                                    fontFamily: "var(--font-serif)",
                                    fontSize: 12,
                                    color: "var(--color-mid-green)",
                                    display: "block",
                                    marginBottom: 12,
                                    letterSpacing: 2
                                }}>0{index + 1}</span>
                                <h3 style={{
                                    fontFamily: "var(--font-serif)",
                                    fontSize: "1.8rem",
                                    color: "var(--color-text-dark)",
                                    marginBottom: 16,
                                    fontWeight: 400
                                }}>{feature.title}</h3>
                                <p style={{
                                    fontFamily: "var(--font-sans)",
                                    fontSize: 15,
                                    color: "var(--color-text-mid)",
                                    lineHeight: 1.8
                                }}>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Concepto Final */}
                <div style={{
                    marginTop: 100,
                    padding: "64px",
                    background: "rgba(45, 74, 62, 0.03)",
                    borderRadius: 4,
                    border: "1px solid var(--color-border)",
                    textAlign: "center"
                }}>
                    <p style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "1.4rem",
                        fontStyle: "italic",
                        color: "var(--color-dark-green)",
                        maxWidth: 800,
                        margin: "0 auto",
                        lineHeight: 1.6
                    }}>
                        "{PROJECT_DETAILS.concept}"
                    </p>
                </div>

            </div>
        </section>
    );
}
