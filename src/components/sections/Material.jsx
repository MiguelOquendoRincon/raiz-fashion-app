export default function Material() {
    return (
        <section id="material" style={{ padding: "var(--section-pad)", background: "#fff", overflow: "hidden" }}>
            <div style={{ maxWidth: "var(--container-max-width)", margin: "0 auto", padding: "var(--container-padding)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

                {/* Decorative elements side */}
                <div style={{ position: "relative", order: 2 }}>
                    <div style={{
                        width: "100%", aspectRatio: "1/1",
                        background: "var(--color-cream)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative"
                    }}>
                        <img
                            src="/assets/prenda_completa.png"
                            alt="Algodón Orgánico"
                            style={{ width: "90%", height: "90%", objectFit: "contain" }}
                        />
                        {/* Floating text or icons */}
                        <div style={{
                            position: "absolute", bottom: "10%", right: "0%",
                            background: "var(--color-dark-green)", color: "#fff",
                            padding: "12px 20px", borderRadius: 40,
                            fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: 2
                        }}>100% ORGÁNICO</div>
                    </div>

                    <svg style={{ position: "absolute", top: -20, left: -20, opacity: 0.1, zIndex: -1 }} width="200" height="200" viewBox="0 0 200 200">
                        <circle cx="100" cy="100" r="100" fill="var(--color-mid-green)" />
                    </svg>
                </div>

                {/* Text content */}
                <div style={{ order: 1 }}>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: 3, color: "var(--color-mid-green)", marginBottom: 16, textTransform: "uppercase" }}>🌱 El origen</p>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--color-text-dark)", fontWeight: 400, lineHeight: 1.2, marginBottom: 28 }}>
                        ¿Por qué algodón orgánico?
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--color-text-dark)", lineHeight: 1.7 }}>
                            El algodón orgánico se cultiva <strong>sin pesticidas ni químicos agresivos</strong> que puedan afectar la piel o contaminar el suelo.
                        </p>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.8 }}>
                            Esto permite obtener una fibra más limpia, más suave y más segura, ideal para niños con <strong>dermatitis atópica</strong> o piel altamente sensible.
                        </p>
                        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--color-text-mid)", lineHeight: 1.8 }}>
                            Al elegirlo, reducimos el impacto ambiental y promovemos prácticas agrícolas responsables que protegen el agua, la tierra y las comunidades productoras.
                        </p>
                        <p style={{
                            marginTop: 16, padding: "24px", borderLeft: "2px solid var(--color-mid-green)",
                            fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--color-text-dark)", background: "var(--color-cream)"
                        }}>
                            Elegimos este material porque entendemos que la piel es el órgano más grande del cuerpo. <strong>Todo lo que la toca, importa.</strong>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
